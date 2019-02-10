
// var request = new XMLHttpRequest();
//    request.open("GET", "http://www.mocky.io/v2/5c600a96310000e00af1afae", false);
//    request.send()
// var arr = JSON.parse(request.responseText);
let arr=[
{
"id": 1,
"name": "Рыжик",
"imageUrl": "https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg"
},

{
"id": 2,
"name": "Вилли",
"imageUrl": "http://trikky.ru/wp-content/blogs.dir/1/files/2018/08/14/10409658_911997115481773_8022799784360495766_n.jpg"
},

{
"id": 3,
"name": "Оскар",
"imageUrl": "https://memepedia.ru/wp-content/uploads/2017/10/котик-туть-5.jpg"
},

{
"id": 4,
"name": "Марго",
"imageUrl": "http://pipcat.ru/wp-content/uploads/2016/07/5-popular-flat-faced-cat-breeds-55460dd1f02401.jpg"
},

{
"id": 5,
"name": "Хорик",
"imageUrl": "https://static9.depositphotos.com/1594920/1089/i/450/depositphotos_10893312-stock-photo-chartreux-cat-16-months-old.jpg"
},

{
"id": 6,
"name": "Генри",
"imageUrl": "https://i2-prod.leeds-live.co.uk/news/leeds-news/article15752393.ece/ALTERNATES/s615/0_800px-Savannah_Cat_portrait.jpg"
},

{
"id": 7,
"name": "Вася",
"imageUrl": "https://www.animalfriends.co.uk/app/uploads/2016/10/27163820/iStock_86086153_MEDIUM1-e1477582806563.jpg"
},

{
"id": 8,
"name": "Борис",
"imageUrl": "https://static1.squarespace.com/static/57c4aca420099e3efb1bdafd/t/594c7bbff7e0ab535a54145f/1493851615883/adoptable+cats+at+the+dancing+cat+san+jose"
},

{
"id": 9,
"name": "Реми",
"imageUrl": "https://www.bluecross.org.uk/sites/default/files/assets/images/finding%20the%20right%20cat%20for%20you.jpg"
},

{
"id": 10,
"name": "Пегги",
"imageUrl": "https://zooproblemnet.ru/wp-content/uploads/2017/12/korotkosherstnyy_kot_ekzot_7_17083058.jpg"
}
]
 function check(){
  var rows = document.getElementsByTagName("tr");
for (var i=0; i<rows.length; i++){
        if (rows[i].classList.contains("selected")) {
      rows[i].classList.remove("selected");
    }
 }
}
 function select(){
     check();
        this.classList.add("selected");
    }
function btn(){
  var item= document.getElementsByClassName('selected')[0].getAttribute("id");
  alert(item);
  check();
}

  window.onload= function () {

  let table= document.createElement("table");
  table.setAttribute('align', "center");
  for (var i=0; i<arr.length; i++){
    let tr= document.createElement("tr");
    let td = document.createElement('td');
    let pic =document.createElement('img');
    let di= document.createElement('div');
    pic.setAttribute('src', arr[i].imageUrl);
    di.appendChild(pic)
    td.appendChild(document.createTextNode(arr[i].name));
    td.appendChild(di);
    td.setAttribute('align', "center");
    tr.setAttribute('id', arr[i].id);
    tr.setAttribute('onclick', "select.call(this)");
    tr.appendChild(td);
    table.appendChild(tr);
  }

  document.getElementsByTagName("body")[0].appendChild(table);
  let button=document.createElement("button");
  button.setAttribute('type', "submit");
  button.setAttribute('onclick', "btn.call(this)");
  button.innerHTML="Submit"
  document.getElementsByTagName("body")[0].appendChild(button);
}
