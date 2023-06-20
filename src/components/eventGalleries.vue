<template>
  <div id="eventgallerie">
    <Swiper :navigation="true" :modules="modules">
      <SwiperSlide id="cont1" v-for="image in imagesGallery" :key="image.url">
        <img class="imagesC" :src="image.download_url" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from 'swiper';
import axios from "axios";
import 'swiper/css/navigation';

export default {
  name: "eventGallery",

  data() {
    return {
      parallaxSwiperWidth: 0,
      imagesGallery: null,
      result: null,
      list: null,
      modules: [Navigation]
     
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    console.log("mi perro");

    axios
      .get("https://picsum.photos/v2/list?page=2&limit=100")
      .then((res) => {
        this.imagesGallery = res.data;
        console.log(res.data);
        console.log(res.data[1].url);
        console.log(res.data[1].download_url);
        this.result = true;
      })
      .catch((e) => console.log(e));
  },
};
</script>
