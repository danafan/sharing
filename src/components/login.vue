<template>
  <div>
    <back title="主页"></back>
    <div class="route" @click="route(1)">师父</div>
    <div class="route" @click="route(2)">徒弟</div>
  </div>
</template>

<style lang="less" scoped>
.item{
  border-bottom: 1px solid #dcdcdc;
  font-size: .28rem;
  width: 100%;
  text-align: center;
  height: .8rem;
  line-height: .8rem;
}

</style>

<script>
import back from '../common/Header.vue'
  export default{
    methods:{
      route(type){
          if(type == 1){
            this.$router.push('/master');
          }else if(type == 2){
            this.$router.push('/apprentice');
          }
      }
    },
    components:{
      'back':back
    }
  }
</script>
