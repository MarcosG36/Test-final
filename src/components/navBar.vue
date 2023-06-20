<template>
    <div id="navBar">
       

        <div id="nav-menu">
            <img src="../assets/svg/hamburgermenu.svg">
            <img src="../assets/images/Logo.png">
        </div>

        <div id="nav-middle">
            <div id="nav-middle-search">
                <input type="Search here">
                <img src="../assets/svg/search.svg">
            </div>
            
            <div>
                <img src="../assets/svg/setting.svg"> 
            </div>


        </div>

     

        <div id="nav-user">
            
            <div id="nav-user-items">
                <div>
                    <router-link to="/">
                        <img src="../assets/svg/ic_bell.svg">
                       <img class="items-Counter" src="../assets/svg/dotCounter.svg">
                    </router-link>
            </div>
                  
                <div id="nav-user-item2">
                    <router-link to="/">
                        <img src="../assets/svg/ic_chat.svg">
                        <img class="items-Counter" src="../assets/svg/dotCounter.svg">
               </router-link>
                   
                </div>
                <div id="nav-user-item3">

                    <router-link to="/">
                        <img src="../assets/svg/bonus1.svg">
                        <img class="items-Counter" src="../assets/svg/dotCounter.svg">
                    </router-link>
                   
                </div>
            </div>
             
            <div id="nav-user-account">
              
              <img class="user-img" src="../assets/images/placeholder.png">
            
              <a id="nav-user-account-name" href="#">David</a>
              <img class="ic-chevron" src="../assets/svg/ic_chevron.svg">
            </div>

        </div>


    </div>
   
</template>

<script>
export default {
    name: 'navBar'
}
</script>