<template>
  <div id="container">
      <img src="../assets/icon.png" class="icon">
      <div class="text">おもしろおかしく加工しよう！！</div>
      <div class="mail">お問い合わせ: prensaofficial@gmail.com</div>
  </div>
</template>

<script>

export default {
}
</script>
<style>
@media screen and (min-width: 781px) {
    #container{
        position: relative;
        height: 100%;
        width: 100%;
    }
    .icon{
        margin-top: 100px;
        width: 350px;
        height: 350px;
    }
    .text{
        margin-top: 40px;
        font-size: 40px;
        font-weight: bold;
    }
    .mail{
        position: absolute;
        font-size: 15px;
        color: gray;
        bottom: 20px;
        left: 50%;
    }
}
@media screen and (min-width: 481px) and (max-width: 780px) {
    #container{
        position: relative;
        height: 100%;
        width: 100%;
    }
    .icon{
        margin-top: 100px;
        width: 300px;
        height: 300px;
    }
    .text{
        margin-top: 40px;
        font-size: 30px;
        font-weight: bold;
    }
    .mail{
        position: absolute;
        font-size: 15px;
        color: gray;
        bottom: 20px;
        left: 50%;
    }
}
@media screen and (max-width: 480px) {
    #container{
        height: 100%;
        width: 100%;
    }
    .icon{
        margin: 100px auto 0px;
        width: 200px;
        height: 200px;
    }
    .text{
        margin-top: 40px;
        font-size: 20px;
        font-weight: bold;
    }
    .mail{
        font-size: 15px;
        color: gray;
        bottom: 20px;
        margin:  100px auto;
    }
}
</style>
