/**
 * 
 * 
 * 
 */



// 得到一个随机颜色
// 封装一个可以获得随机区间的整数的函数
function randomInt(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}
// 封装一个可以获得随机颜色的函数
function randomColor() {
  // 生成3个随机[0,255]之间的随机整数
  var r = randomInt(0, 255);
  var g = randomInt(0, 255);
  var b = randomInt(0, 255);
  // 拼接成rgb颜色
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}


// 计算数量总数和价格总数
function totalCountAndMoney() {
  // 根据选中的多选框，得到选中的商品的id
  let totalCount = 0;
  let totalMoney = 0;
  $('.item-list input[type=checkbox]:checked').each((i, e) => {
    let id = parseInt($(e).parents('.item').attr('data-id'));
    arr.forEach(e => {
      if (id === e.pID) {
        // 勾选的在本地存储中的数据
        totalCount += e.number;
        totalMoney += e.number * e.price;
      }
    })
  });
  // 修改数量和总价
  $('.selected').text(totalCount);
  $('.total-money').text(totalMoney);
};


//全选和反选
function chooseAllRoOne(){
  //效果1: 全选
      let all = $('#j_cbAll');
      let alone = $('#j_tb input');
      all.on('click',function(){
          let status = $(this).prop('checked');
          alone.prop('checked',status);
      });
  //效果2：单选
      alone.on('click',function(){
          all.prop('checked',$('#j_tb input:checked').length === alone.length);
      });
};