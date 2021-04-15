<template>
  <div>
    <h1></h1>
  </div>
</template>

<script>
export default {
 mounted(){
   this.getActile()
 },
 data(){
   return{
     tit:[]
   }
 },
 methods:{
  async getActile(){
    console.log(this.$API.actile.getactile)
     const result = await this.$API.actile.getactile()
    console.log(result)
    this.tit = result.data
   }
 }
}
</script>

<style>

</style>
