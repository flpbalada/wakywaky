<template>
  <div class="bg-white pt-5 pb-5 shadow-lg text-center">
    <b-container>
      <b-row align-h="center" class="mt-3 mb-5">
        <b-col cols="12" md="8">
          <h1>{{ content.header.title }}</h1>
          <p class="lead mb-4 pt-4">
            {{ content.header.subTitle }}
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div class="bg-dark mt-5 mb-5">
      <b-container>
        <b-row class="pb-5 pt-5">
          <b-col
            v-for="(item, i) in content.header.cards"
            :key="i"
            class="mb-2"
            cols="12"
            md="4"
          >
            <b-link :to="item.link" :title="item.title" class="card shadow-lg">
              <b-card bg-variant="white" text-variant="dark">
                <div class="mb-3 emoji">{{ item.emoji }}</div>
                <h4>
                  {{ item.title }}
                </h4>
              </b-card>
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <b-row
        v-for="(item, i) in content.pageparts"
        :key="i"
        :class="'mt-5 mb-5 text-center text-md-left ' + setSwitchedColumns(i)"
        align-v="center"
      >
        <b-col cols="12" md="6" class="mt-4 mb-4">
          <h3>{{ item.title }}</h3>
          <div class="d-none d-md-flex ">
            <wave></wave>
          </div>
          <p>{{ item.subTitle }}</p>
          <b-button
            :to="item.button.link"
            :title="item.button.title"
            class="mt-4 font-weight-bold"
            variant="outline-primary"
            size="lg"
            >{{ item.button.title }}
          </b-button>
        </b-col>
        <b-col class="mt-4 mb-4">
          <b-img-lazy
            :src="require(`~/assets/${item.img.src}`)"
            :alt="item.img.alt"
            class="shadow-lg rounded-lg"
            fluid
          ></b-img-lazy>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import wave from "~/components/base/wave.vue";

export default {
  components: {
    wave
  },
  methods: {
    setSwitchedColumns(i) {
      return i % 2 == 1 ? "d-md-flex flex-row-reverse" : "";
    }
  },
  data() {
    return {
      content: {
        header: {
          title: "Všimli jsme si, že tě baví wakeboarding",
          subTitle:
            "Tak se připoj k české wakeboarding komunitě online. 🤟🤟 Plácni a pokračuj!",
          cards: [
            {
              emoji: "👨‍🏫",
              title: "Online waketrenér",
              link: "/online-trener-wakeboardingu"
            },
            {
              emoji: "⛱️",
              title: "Srovnání wakeparků",
              link: "/srovnani-wakeparku"
            },
            {
              emoji: "🛒",
              title: "Srovnání wakeshopů",
              link: "/srovnani-wakeshopu"
            }
          ]
        },
        pageparts: [
          {
            title:
              "Online trenér wakeboardingu — z něj ti snad hlava nebouchne 🤯",
            subTitle:
              "Rada nad zlato: Pokud toho víc nakecáš, než najezdíš, tak jdi radši nakoupit a připrav na gril. A pokud mluvíš tak akorát, waky tě baví a chceš konečně další pumpu adrenalinu z nově odjetého tryku, tak si najdi návody od našeho free online trenéra wakeboardingu. ",
            button: {
              title: "Pokračovat na online trenéra",
              link: "/online-trener-wakeboardingu"
            },
            img: {
              src: "wakecoach.jpg",
              alt: "online trenér wakeboardingu"
            }
          },
          {
            title: "Wakeparky — schválně, ve kterém tě sežere nejmíň komárů 🧛‍♀️",
            subTitle:
              "Je pátek a tobě straší ve věži, protože nevíš kam na wejky žvějky? Hledej ve srovnaných wakeparcích. Jsou tam nejenom ty české, ale i ty zahraniční. Snažíme se připravit kompletní a nezávislý pohled na dané místo. Nejvíce se zaměřujeme na vodu, překážky, personál a míru všech návštěvníku ku těm co na nás koukali jako na voly.",
            button: {
              title: "Prohlédnou wakeparky",
              link: "/srovnani-wakeparku"
            },
            img: {
              src: "wakeparks.jpg",
              alt: "srovnání wakeparků"
            }
          },
          {
            title: "Wakeshopy — to abys aspoň vypadal, když už nic nedáváš 🤣",
            subTitle:
              "Dnům boardshortů pod kolena dávno odzvonilo a pokud v nich ještě někdo jezdí, neposmíváme se — kecáme. Na vodě je potřeba také vypadat a pokud hledáš krám, kde si koupit nějaké to vybavení, tak jsme přichystali srovnání wakeshopů. Kupuj kvalitní wakeboardy, helmy, vesty neopreny a podobné harampádí.",
            button: {
              title: "Prohlédnou wakeshopy",
              link: "/srovnani-wakeshopu"
            },
            img: {
              src: "wakeshops.jpg",
              alt: "srovnání wakeshopů"
            }
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
.emoji {
  font-size: 2rem;
}
.card {
  transition: all 0.1s ease;
  top: 0;
  border: hidden !important;
}

.card:hover {
  position: relative;
  top: -4px !important;
  text-decoration: none;
}
</style>
