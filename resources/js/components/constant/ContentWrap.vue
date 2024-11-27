<template>
    <Navbars/>
    <router-view/>
    <Footers/>
</template>

<script setup>
import themeInit from '../../../../public/js/theme.init';
import themeBase from '../../../../public/js/theme';
import { nextTick, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbars from './navbar.vue';
import Footers from './footer.vue';

// Obtenir l'objet de la route actuelle
const route = useRoute();

// Fonction pour appliquer les thèmes
const applyTheme = () => {
  nextTick(()=>{
    themeBase(jQuery);
    themeInit(jQuery);
  })
};

// Exécuter une fois au montage du composant
onMounted(() => {
  applyTheme();
});

// Surveiller les changements de route
watch(
  () => route.fullPath, // Réagir lorsque le chemin complet change
  () => {
    applyTheme();
  }
);
</script>