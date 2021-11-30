<template>
  <footer class="hero-footer footer mx-6 px-4">
    <section v-show="mobile" class="collapse-mobile py-5">
      <b-collapse class="card" animation="slide">
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <p class="card-header-title is-size-5">Organizadores:</p>
          <a class="card-header-icon">
            <b-icon size="is-xg" :icon="props.open ? 'expandir' : 'contrair'">
            </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="columns footer-images">
            <figure class="image mx-3">
              <img
                src="/rodape/ufc.png"
                alt="Logo da universidade federal do Ceará"
                width="158"
                height="80"
              />
            </figure>
            <figure class="image mx-3">
              <img
                src="/rodape/cientista-chefe.png"
                alt="Logo do programa Cientista Chefe"
                width="112"
                height="48"
              />
            </figure>
            <figure class="image mx-3">
              <img
                src="/rodape/seduc.png"
                alt="Logo da Secretaria da Educação do Ceará"
                width="139"
                height="42"
              />
            </figure>
            <figure class="image mx-3">
              <img
                src="/rodape/funcap.png"
                alt="Logo da Fundação Cearense de Apoio ao Desenvolvimento Científico e Tecnológico"
                width="74"
                height="50"
              />
            </figure>
          </div>
        </div>
      </b-collapse>
      <b-collapse class="card" animation="slide">
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <p class="card-header-title is-size-5">Parceiros:</p>
          <a class="card-header-icon">
            <b-icon size="is-xg" :icon="props.open ? 'expandir' : 'contrair'">
            </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="columns footer-images">
            <figure class="image mx-3">
              <img
                src="/rodape/lme.png"
                alt="logo do laboratório de Mídias Educacionais"
                width="79"
                height="40"
              />
            </figure>
            <figure class="image mx-3">
              <img
                src="/rodape/ufc-virtual.png"
                alt="logo do Instituto UFC Virtual"
                width="74"
                height="50"
              />
            </figure>
          </div>
        </div>
      </b-collapse>
    </section>
    <div v-show="!mobile" class="container columns">
      <div class="column mx-2 organizadores">
        <div>
          <div class="footer-title is-size-3">Organizadores:</div>
          <div class="columns footer-images">
            <figure class="image mx-3">
              <img
                src="/rodape/ufc.png"
                alt="Logo da universidade federal do Ceará"
                width="158"
                height="80"
              />
            </figure>
            <figure class="image mx-3">
              <img
                src="/rodape/cientista-chefe.png"
                alt="Logo do programa Cientista Chefe"
                width="112"
                height="48"
              />
            </figure>
            <figure class="image mx-3">
              <img
                src="/rodape/seduc.png"
                alt="Logo da Secretaria da Educação do Ceará"
                width="139"
                height="42"
              />
            </figure>
            <figure class="image mx-3">
              <img
                src="/rodape/funcap.png"
                alt="Logo da Fundação Cearense de Apoio ao Desenvolvimento Científico e Tecnológico"
                width="74"
                height="50"
              />
            </figure>
          </div>
        </div>
      </div>
      <div class="column mx-2 parceiros">
        <div>
          <div class="footer-title is-size-3">Parceiros:</div>
          <div class="columns footer-images">
            <figure class="image mx-3">
              <img
                src="/rodape/lme.png"
                alt="logo do laboratório de Mídias Educacionais"
                width="79"
                height="40"
              />
            </figure>
            <figure class="image mx-3">
              <img
                src="/rodape/ufc-virtual.png"
                alt="logo do Instituto UFC Virtual"
                width="74"
                height="50"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    mobile: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.collapse-mobile {
  border-top: 1px solid #a5a5a5;
}
.level-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer-images {
  align-items: center;
  justify-content: flex-start;
  min-height: 80px;
}
.card-header {
  border-bottom: 1px solid #ededed;
}
.card-header-title,
.card-header-icon {
  font-weight: 500;
  color: #979797;
}
.card {
  box-shadow: none;
}
.card-content {
  width: 60%;
  .footer-images {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    > figure {
      max-width: 80px;
    }
  }
}

.dark-mode {
  .footer {
    background-color: $black;
  }
  .collapse-mobile {
    background-color: $black;
    .collapse.card {
      background-color: $black;
    }
    .card-header-icon,
    .card-header-title {
      color: $warning;
    }
  }
}
</style>
