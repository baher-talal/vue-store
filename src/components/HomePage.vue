<template>
  <div class="container">
    <div style="width:100%;margin:20px auto;height:400px">
      <!-- Using the slider component -->
      <slider ref="slider" :options="options">
        <!-- slideritem wrapped package with the components you need -->
        <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
        <!-- Customizable loading -->
        <div slot="loading">loading...</div>
      </slider>
    </div>

    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" class="pr-2">
        <div class="new mb-3 mt-5">
          <h3>New Collection</h3>
        </div>
      </vs-col>

      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6" class="pr-2">
        <vs-card class="cardx">
          <div slot="media">
            <img src="../../src/assets/images/7.jpg" />
          </div>
          <div>
            <span class="text-center d-block">Lorem ipsum dolor</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button type="gradient" @click="popupActivo1=true" color="danger">
                <i class="far fa-eye"></i>
                <div class="centerx">
                  <vs-popup fullscreen  title="Lorem ipsum dolor" :active.sync="popupActivo1">
                    <div style="width:100%;margin:20px auto;height:400px">
                      <!-- Using the slider component -->
                      <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem
                          v-for="(item,index) in someList"
                          :key="index"
                          :style="item.style"
                        >{{item.html}}</slideritem>
                        <!-- Customizable loading -->
                        <div slot="loading">loading...</div>
                      </slider>
                    </div>

                    <p
                      class="text-center text-capitalize mt-5"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis ex necessitatibus corporis ab laboriosam pariatur ut consectetur saepe cum.</p>
                    <ul class="pl-5 mt-4">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </vs-popup>
                </div>
              </vs-button>

              <vs-button @click="addItem()">
                <i class="fas fa-shopping-cart"></i>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>

      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6" class="pr-2">
        <vs-card class="cardx">
          <div slot="media">
            <img src="../../src/assets/images/25.jpg" />
          </div>
          <div>
            <span class="text-center d-block">Lorem ipsum dolor</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button type="gradient" @click="popupActivo2=true" color="danger">
                <i class="far fa-eye"></i>
                <div class="centerx">
                  <vs-popup fullscreen title="Lorem ipsum dolor" :active.sync="popupActivo2">
                    <div style="width:100%;margin:20px auto;height:400px">
                      <!-- Using the slider component -->
                      <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem
                          v-for="(item,index) in someList"
                          :key="index"
                          :style="item.style"
                        >{{item.html}}</slideritem>
                        <!-- Customizable loading -->
                        <div slot="loading">loading...</div>
                      </slider>
                    </div>

                    <p
                      class="text-center text-capitalize mt-5"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis ex necessitatibus corporis ab laboriosam pariatur ut consectetur saepe cum.</p>
                    <ul class="pl-5 mt-4">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </vs-popup>
                </div>
              </vs-button>

              <vs-button @click="addItem()">
                <i class="fas fa-shopping-cart"></i>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>

      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6" class="pr-2">
        <vs-card class="cardx">
          <div slot="media">
            <img src="../../src/assets/images/8.jpg" />
          </div>
          <div>
            <span class="text-center d-block">Lorem ipsum dolor</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button type="gradient" @click="popupActivo3=true" color="danger">
                <i class="far fa-eye"></i>
                <div class="centerx">
                  <vs-popup fullscreen title="Lorem ipsum dolor" :active.sync="popupActivo3">
                    <div style="width:100%;margin:20px auto;height:400px">
                      <!-- Using the slider component -->
                      <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem
                          v-for="(item,index) in someList"
                          :key="index"
                          :style="item.style"
                        >{{item.html}}</slideritem>
                        <!-- Customizable loading -->
                        <div slot="loading">loading...</div>
                      </slider>
                    </div>

                    <p
                      class="text-center text-capitalize mt-5"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis ex necessitatibus corporis ab laboriosam pariatur ut consectetur saepe cum.</p>
                    <ul class="pl-5 mt-4">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </vs-popup>
                </div>
              </vs-button>

              <vs-button @click="addItem()">
                <i class="fas fa-shopping-cart"></i>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>

      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6" class="pr-2">
        <vs-card class="cardx">
          <div slot="media">
            <img src="../../src/assets/images/26.jpg" />
          </div>
          <div>
            <span class="text-center d-block">Lorem ipsum dolor</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button type="gradient" @click="popupActivo4=true" color="danger" class>
                <i class="far fa-eye"></i>
                <div class="centerx">
                  <vs-popup fullscreen title="Lorem ipsum dolor" :active.sync="popupActivo4">
                    <div style="width:100%;margin:20px auto;height:400px">
                      <!-- Using the slider component -->
                      <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem
                          v-for="(item,index) in someList"
                          :key="index"
                          :style="item.style"
                        >{{item.html}}</slideritem>
                        <!-- Customizable loading -->
                        <div slot="loading">loading...</div>
                      </slider>
                    </div>

                    <p
                      class="text-center text-capitalize mt-5"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis ex necessitatibus corporis ab laboriosam pariatur ut consectetur saepe cum.</p>
                    <ul class="pl-5 mt-4">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </vs-popup>
                </div>
              </vs-button>

              <vs-button @click="addItem()">
                <i class="fas fa-shopping-cart"></i>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>

      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6" class="pr-2">
        <vs-card class="cardx">
          <div slot="media">
            <img src="../../src/assets/images/7.jpg" />
          </div>
          <div>
            <span class="text-center d-block">Lorem ipsum dolor</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button type="gradient" @click="popupActivo5=true" color="danger" class>
                <i class="far fa-eye"></i>
                <div class="centerx">
                  <vs-popup fullscreen title="Lorem ipsum dolor" :active.sync="popupActivo5">
                    <div style="width:100%;margin:20px auto;height:400px">
                      <!-- Using the slider component -->
                      <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem
                          v-for="(item,index) in someList"
                          :key="index"
                          :style="item.style"
                        >{{item.html}}</slideritem>
                        <!-- Customizable loading -->
                        <div slot="loading">loading...</div>
                      </slider>
                    </div>

                    <p
                      class="text-center text-capitalize mt-5"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis ex necessitatibus corporis ab laboriosam pariatur ut consectetur saepe cum.</p>
                    <ul class="pl-5 mt-4">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </vs-popup>
                </div>
              </vs-button>

              <vs-button @click="addItem()">
                <i class="fas fa-shopping-cart"></i>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>

      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6" class="pr-2">
        <vs-card class="cardx">
          <div slot="media">
            <img src="../../src/assets/images/25.jpg" />
          </div>
          <div>
            <span class="text-center d-block">Lorem ipsum dolor</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button type="gradient" @click="popupActivo6=true" color="danger" class>
                <i class="far fa-eye"></i>
                <div class="centerx">
                  <vs-popup fullscreen title="Lorem ipsum dolor" :active.sync="popupActivo6">
                    <div style="width:100%;margin:20px auto;height:400px">
                      <!-- Using the slider component -->
                      <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem
                          v-for="(item,index) in someList"
                          :key="index"
                          :style="item.style"
                        >{{item.html}}</slideritem>
                        <!-- Customizable loading -->
                        <div slot="loading">loading...</div>
                      </slider>
                    </div>

                    <p
                      class="text-center text-capitalize mt-5"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis ex necessitatibus corporis ab laboriosam pariatur ut consectetur saepe cum.</p>
                    <ul class="pl-5 mt-4">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </vs-popup>
                </div>
              </vs-button>
              <vs-button @click="addItem()">
                <i class="fas fa-shopping-cart"></i>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>

      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6" class="pr-2">
        <vs-card class="cardx">
          <div slot="media">
            <img src="../../src/assets/images/8.jpg" />
          </div>
          <div>
            <span class="text-center d-block">Lorem ipsum dolor</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button type="gradient" @click="popupActivo7=true" color="danger" class>
                <i class="far fa-eye"></i>
                <div class="centerx">
                  <vs-popup fullscreen title="Lorem ipsum dolor" :active.sync="popupActivo7">
                    <div style="width:100%;margin:20px auto;height:400px">
                      <!-- Using the slider component -->
                      <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem
                          v-for="(item,index) in someList"
                          :key="index"
                          :style="item.style"
                        >{{item.html}}</slideritem>
                        <!-- Customizable loading -->
                        <div slot="loading">loading...</div>
                      </slider>
                    </div>

                    <p
                      class="text-center text-capitalize mt-5"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis ex necessitatibus corporis ab laboriosam pariatur ut consectetur saepe cum.</p>
                    <ul class="pl-5 mt-4">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </vs-popup>
                </div>
              </vs-button>

              <vs-button @click="addItem()">
                <i class="fas fa-shopping-cart"></i>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>

      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6" class="pr-2">
        <vs-card class="cardx">
          <div slot="media">
            <img src="../../src/assets/images/26.jpg" />
          </div>
          <div>
            <span class="text-center d-block">Lorem ipsum dolor</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="center">
              <vs-button type="gradient" @click="popupActivo8=true" color="danger" class>
                <i class="far fa-eye"></i>
                <div class="centerx">
                  <vs-popup fullscreen title="Lorem ipsum dolor" :active.sync="popupActivo8">
                    <div style="width:100%;margin:20px auto;height:400px">
                      <!-- Using the slider component -->
                      <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem
                          v-for="(item,index) in someList"
                          :key="index"
                          :style="item.style"
                        >{{item.html}}</slideritem>
                        <!-- Customizable loading -->
                        <div slot="loading">loading...</div>
                      </slider>
                    </div>

                    <p
                      class="text-center text-capitalize mt-5"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis ex necessitatibus corporis ab laboriosam pariatur ut consectetur saepe cum.</p>
                    <ul class="pl-5 mt-4">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                  </vs-popup>
                </div>
              </vs-button>

              <vs-button @click="addItem()">
                <i class="fas fa-shopping-cart"></i>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
export default {
  data() {
    return {
      popupActivo1: false,
      popupActivo2: false,
      popupActivo3: false,
      popupActivo4: false,
      popupActivo5: false,
      popupActivo6: false,
      popupActivo7: false,
      popupActivo8: false,
      someList: [
        {
          // html: "slide2",
          style: {
            "background-image":
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShR3teci0pqZsLRkRMqzS6i9up2SG72jSdZQ&usqp=CAU')",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "background-size": "contain"
          }
        },

        {
          // html: "slide2",
          style: {
            "background-image":
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZzYzyVpOeITevboqvCFpDGr-Kk7k4mS3xTQ&usqp=CAU')",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "background-size": "contain"
          }
        },
        {
          // html: "slide3",
          style: {
            "background-image":
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG5xaq6CRsLJNbPlB9Sqh9SZOMijrBFvsn3g&usqp=CAU')",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "background-size": "contain"
          }
        }
      ],
      //Slider configuration [obj]
      options: {
        pagination: true,
        thresholdDistance: 100, // Sliding distance threshold
        thresholdTime: 300, // Sliding time threshold decision
        grabCursor: true, // Scratch style
        speed: 300, // Sliding speed
        timingFunction: "ease", // Sliding mode
        loop: true, // Infinite loop
        autoplay: 2000, // Auto play[ms]
        preventDocumentMove:true
      }
    };
  },
  components: {
    slider,
    slideritem
  },
  methods:{
    addItem(){
      this.$store.state.counter ++;
      localStorage.setItem('counter',this.$store.state.counter)
    }
  }
};
</script>

<style>
.cardx {
  margin: 15px;
}

/* .vs-popup--content {
  display: flex;
} */

.con-vs-popup.fullscreen .vs-popup {
  width: 60%;
  height: 80%;
}
</style>