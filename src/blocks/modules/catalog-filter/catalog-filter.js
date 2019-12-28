import Vue from 'vue';

const Accordion = Vue.component("Accordion", {
    props: ["title", "expandAll"],
    data() {
        return {
            expanded: false
        };
    },
    methods: {
        toggleCardState() {
            this.expanded = !this.expanded;
        },
        closeAll() {
            this.expanded = false;
        }
    },
    created() {
        EventBus.$on("closeAll", this.closeAll);
    },
    template: `
    <div class="catalog-filter__item--wrapper">
      <div class="catalog-filter__item" :class="{ 'not-expanded': !this.expanded }">

        <div class="catalog-filter__item-header" @click="toggleCardState">
          <div class="catalog-filter__item-title">
            {{title}}
          </div>
          <div class="catalog-filter__item-icon">
            <span class="icon">
              <img src="img/sprites/sprite.svg#ico_to-top-purple" width="12" height="7" alt="Стрелка">
            </span>
          </div>
        </div>

        <div class="catalog-filter__item-content">
          <div class="content">
            <slot></slot>
          </div>
        </div>

      </div>
    </div>
  `
});

const EventBus = new Vue();

const App = new Vue({
    el: "#catalog-filter",
    components: {
        Accordion
    },
    methods: {
        expandAll() {
            EventBus.$emit("closeAll");
        }
    }
});
