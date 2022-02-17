function popUpthemNV() {
  document.querySelector(".addNV").style.display = "block";
}

function closePopUpThemNV() {
  document.querySelector(".addNV").style.display = "none";
}

var dsnv = [];

// var dsnvLocal = localStorage.getItem("dsnvLocal");

// dsnv = JSON.parse(dsnvLocal);

renderTable(dsnv);

function themNhanVien() {
  var ma = document.querySelector("#maNV").value;
  var ten = document.querySelector("#tenNV").value;
  var email = document.querySelector("#emailNV").value;
  var password = document.querySelector("#passwordNV").value;
  var ngaySinh = document.querySelector("#ngaySinhNV").value;
  var chucVu = document.querySelector("#chucVuNV").value;

  var nhanVien = new NhanVien(ma, ten, email, password, ngaySinh, chucVu);

  dsnv.push(nhanVien);
  renderTable(dsnv);
  luuDataLocal();
}

function renderTable(arr) {
  var contentHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var nv = arr[i];
    contentHTML += `
    <tr>
    <td>${nv.ma}</td>
    <td>${nv.ten}</td>
    <td>${nv.email}</td>
    <td>${nv.ngaySinh}</td>
    <td>${nv.chucVu}</td>
    <td><button class="btn btn-info">Edit</button></td>
    <td><button class="btn btn-danger" onclick="xoaNV(${nv.ma})">Delete</button></td>
    </tr>
    `;
  }
  document.querySelector("#tbodyNhanVien").innerHTML = contentHTML;
}

function timKiemNV(maNV) {
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].ma == maNV) {
      return i;
    }
  }
}

function xoaNV(maNV) {
  var i = timKiemNV(maNV);
  dsnv.splice(i, 1);
  renderTable(dsnv);
  luuDataLocal();
}

function luuDataLocal() {
  var dsnvJSON = JSON.stringify(dsnv);
  localStorage.setItem("dsnvLocal", dsnvJSON);
}

function timNV() {
  var tenNVValue = document.getElementById("tenNVTxt").value;
  var tableNV = document.querySelectorAll("#tbodyNhanVien tr");
  var trTimKiem = tableNV[0];

  for (var i = 0; i < tableNV.length; i++) {
    const currentTr = tableNV[i];
    const currentListTd = currentTr.querySelectorAll("td");
    const currentTdName = currentListTd[1].innerText;

    if (currentTdName == tenNVValue) {
      trTimKiem = currentTr;
    }
  }
  document.querySelector("#tbodyNhanVien").innerHTML = trTimKiem.getInnerHTML();
}
