<template>
    <div id="mainContent">

           <bestSelling></bestSelling>
           <barChart></barChart>
           <featured></featured>
           <eventGalleries> </eventGalleries>
           
    </div>
</template>

<script>

import bestSelling from './bestSelling.vue'
import featured from './featured.vue'
import eventGalleries from './eventGalleries.vue'
import barChart from './barChart.vue'


export default {
  
    name: 'mainContent',
    components:{
        bestSelling,
        barChart,
        featured,
        eventGalleries
    }
   

    
    
}
</script>

