<template>
  <div>
  <div class="app-name">Prensa</div>
  <div class="title">プライバシーポリシー</div>
  <div class="text">本アプリからは利用者情報は送信されません。<br>
  本アプリのバージョンアップに伴いプライバシーポリシーが変更される可能性があります。<br>
  お問い合わせはprensaofficial@gmail.comまでよろしくお願いいたします。
  </div>
  </div>
</template>

<script>

export default {
}
</script>
<style>
@media screen and (min-width: 781px) {
    .app-name{
        margin-top: 50px;
        font-size: 40px;
        font-weight: bold;
    }
    .title{
        margin: 50px auto;
        border-bottom: 1px solid gray;
        width: 700px;
        text-align: left;
    }
    .text{
        width: 700px;
        text-align: left;
        margin-top: 50px;
        font-size: 20px;
        font-weight: bold;
        margin: 10px auto;
    }
   
}
@media screen and (min-width: 481px) and (max-width: 780px) {
    
    .app-name{
        margin-top: 50px;
        font-size: 40px;
        font-weight: bold;
    }
    .title{
        margin: 50px auto;
        border-bottom: 1px solid gray;
        width: 470px;
        text-align: left;
    }
    .text{
        width: 470px;
        text-align: left;
        margin-top: 50px;
        font-size: 15px;
        font-weight: bold;
        margin: 10px auto;
    }
}
@media screen and (max-width: 480px) {
    .app-name{
        margin-top: 30px;
        font-size: 30px;
        font-weight: bold;
    }
    .title{
        margin: 50px auto;
        border-bottom: 1px solid gray;
        width: 280px;
        text-align: left;
    }
    .text{
        width: 280px;
        text-align: left;
        margin-top: 50px;
        font-size: 15px;
        font-weight: bold;
        margin: 5px auto;
    }
}
</style>
