var magdl = [
  {
    k: 1,
    img: "img/tranxuanbach-1699526035931.webp",
    names: "Văn Cường",
    ndcaccm: "Cùng sửa nhé, ..."
  },
  {
    k: 2,
    img: "img/tranxuanbach-1699526035931.webp",
    names: "Huy",
    ndcaccm: "Cùng sửa nhé, ..."
  },
  {
    k: 3,
    img: "img/tranxuanbach-1699526035931.webp",
    names: "Vỹ",
    ndcaccm: "Cùng sửa nhé, ..."
  },
  {
    k: 4,
    img: "img/tranxuanbach-1699526035931.webp",
    names: "Trang",
    ndcaccm: "Cùng sửa nhé, ..."
  },
]

for (var i = 0; i < magdl.length; i++) {
  var noidung1khoi = `  <div class="content" id="comments-${magdl[i].k}">
  <img src="${magdl[i].img}" alt="">
  <b>${magdl[i].names}</b>
  <span>${magdl[i].ndcaccm}</span>
</div>  `;

  var phantu = document.createElement('div');
    phantu.innerHTML = noidung1khoi;
  var khoito = document.getElementById('comments');
    khoito.appendChild(phantu);
}
