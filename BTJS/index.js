function tinhDiemUuTien(khuVuc, doiTuong) {
  let diemKhuVuc = 0;
  switch (khuVuc) {
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
  }

  let diemDoiTuong = 0;
  switch (parseInt(doiTuong)) {
    case 1:
      diemDoiTuong = 2.5;
      break;
    case 2:
      diemDoiTuong = 1.5;
      break;
    case 3:
      diemDoiTuong = 1;
      break;
  }

  return diemKhuVuc + diemDoiTuong;
}

function kiemTraTrungTuyen() {
  const diemChuan = parseFloat(document.getElementById("diemChuan").value);
  const diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  const diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  const diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.querySelector(
    'input[name="doiTuong"]:checked'
  ).value;

  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    document.getElementById("result").style.display = "block";
    document.getElementById(
      "result"
    ).innerHTML = `Kết quả: Rớt <br> Lý do: Có môn bị điểm 0`;
    return;
  }

  const diemUuTien = tinhDiemUuTien(khuVuc, doiTuong);
  const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

  const ketQua = tongDiem >= diemChuan ? "Đậu" : "Rớt";

  document.getElementById("result").style.display = "block";
  document.getElementById(
    "result"
  ).innerHTML = `Kết quả: ${ketQua} <br> Tổng điểm: ${tongDiem}`;
}
function calculateBill() {
  const name = document.getElementById("name").value;
  const kw = parseFloat(document.getElementById("kw").value);
  const resultDiv = document.getElementById("result1");

  if (!name || isNaN(kw) || kw < 0) {
    resultDiv.textContent = "Vui lòng nhập thông tin hợp lệ!";
    return;
  }

  let total = 0;

  if (kw <= 50) {
    total = kw * 500;
  } else if (kw <= 100) {
    total = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    total = 50 * 500 + 50 * 650 + (kw - 100) * 1100;
  } else {
    total = 50 * 500 + 50 * 650 + 100 * 1100 + (kw - 200) * 1300;
  }
  resultDiv.innerHTML = `<strong>${name}</strong>, số tiền phải trả là: <strong>${total.toLocaleString()} VNĐ</strong>`;
}
