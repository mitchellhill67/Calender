<template>
  <v-app>
    <v-content>
      <CalenderItem/>
    </v-content>
  </v-app>
</template>

<script>
import CalenderItem from './components/CalenderItem.vue';


export default {
  name: 'App',

  components: {
    CalenderItem
    
  },

  data: () => ({
    //
  }),
};
</script>
