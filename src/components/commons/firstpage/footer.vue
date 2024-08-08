<template>
  <div class="footer none">
    <div class="footer__title">
        <p class="footer__title__quest">Квест? Квест!</p>
        <p class="footer__title__date">© 2024 domain</p>
    </div>
    <div class="footer__info-contact">
        <p class="footer__info-contact__number">+7 (495) 150-04-45</p>
        <p class="footer__info-contact__email">info@domain.com</p>
        <p class="footer__info-contact__text">Fermentum fames venenatis erat vitae dui. Dolor, viverra lectus at nec etiam consectetur ullamcorper libero diam. Id morbi pretium nullam sed at tristique pellentesque phasellus.</p>
        <img src="../img/pay.png" alt="">
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
        width: 1380.27px !important;
height: 176px;
padding-top: 40px;
padding-left: 30px;
display: flex;
flex-direction: column;
    justify-content: space-between;
    margin-left: 40px;
    border: 1px solid gray;
    border-width: 0px 0 1px 0;
    margin-bottom: 20px;
    }
    .footer p{
        color: white;
    }
    .footer__title p{
        color: white;
        
    }
    .footer__title__quest{
        width: 128px;
height: 32px;
font-family: Formular;
font-size: 18px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
margin: 0 0;

    }
    .popular-cards__title{
        margin: 0 0;
    }
    .footer__title__date{
      
        font-family: Formular;
font-size: 14px;
margin: 0 0;
letter-spacing: 0em;
text-align: left;

    }

    .footer__info-contact{
        width: 1350px;
        display: flex;
        justify-content: space-between;
    align-items: center;
    }
    .footer__info-contact__number{
        width: 151px;
height: 15px;
font-family: Formular;
font-size: 16px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

}
.footer__info-contact__number{
    width: 119px;
    height: 17px;
    font-family: Formular;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: left;

}
.footer__info-contact__text{
    width: 559.32px;
height: 36px;
font-family: Formular;
font-size: 13px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;

}
.footer__info-contact img{
    width: 159px;
    height: 16px;
}
@media only screen and (min-width: 375px) and (max-width: 550px){
    .footer{
        display: none;
    }
}
</style>
