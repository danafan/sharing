<template>
  <div>
    <div class="route" @click="route(1)">师父</div>
    <div class="route" @click="route(2)">徒弟</div>
  </div>
</template>

<style lang="less" scoped>
.route{
  border-bottom: 1px solid #dcdcdc;
  font-size: .28rem;
  width: 100%;
  text-align: center;
  height: .8rem;
  line-height: .8rem;
}

</style>

<script>
import resource from '../api/resource.js'
export default{
  created(){
    // resource.homeList({id:3153}).then(res => {
    //   if (res.data.code == 0) {
    //     console.log(res);
    //   }else{
    //     console.log(res.data.msg);
    //   }
    // })
  },
  methods:{
    route(type){
      if(type == 1){
        this.$router.push('/master');
      }else if(type == 2){
        this.$router.push('/navbar');
      }
    }
  }
}
</script>
