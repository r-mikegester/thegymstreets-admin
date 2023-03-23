<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button @click="presentAlert">
            <ion-icon slot="icon-only" :icon="personAddOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Members</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class=" min-h-full bg-fixed pb-96">
        <MembersWrap>
          <MembersTab title="Clients">
            <div class="mx-auto">
              <div class="mx-0  my-5 justify-center">
                <div
                  class="bg-white max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1  justify-center mx-3 row-end-3 rounded-3xl">
                  <div class="flex flex-col shadow-md max-w-3xl rounded-3xl  h-full">
                    <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-semibold">CLIENTS</div>

                    <div class=" rounded-2xl mx-1">
                      <ion-accordion-group expand="inset" class="rounded-3xl shadow-none border-white">
                        <ion-accordion value="first">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?1">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Abigael Julia Adrao</p><span><ion-badge color="danger">Need
                                    Coach</ion-badge></span>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="second">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?2">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Beryl Ruth Barredo</p><span>
                                  <ion-badge color="primary">
                                    Coach: Frederick</ion-badge></span>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="third">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?3">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Adrian Carillo</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="fourth">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?4">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Janeth Naza</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="fifth">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?5">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Marvin Gulas</p><span>
                                  <ion-badge color="primary">
                                    Coach: Frederick</ion-badge></span>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                      </ion-accordion-group>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Skeleton Loading-->
            <div class="mx-auto">
              <div class="md:m-20 mx-0  my-5 justify-center">
                <div
                  class=" bg-white max-w-9xl text-white col-span-3 md:col-span-2 row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                  <div class="flex flex-col shadow-md max-w-3xl rounded-3xl  h-full">
                    <div class="h-7 mx-5 py-1 rounded-3xl animate-pulse px-3 text-xl font-semibold bg-gray-200 mt-5 w-52">
                    </div>

                    <div class=" p-6 rounded-2xl mx-2">
                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>

                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>
                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>
                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>
                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--End of Skeleton Loading-->
          </MembersTab>
          <MembersTab title="Coaches">
            <div class="mx-auto">
              <div class="mx-0  my-5 justify-center">
                <div
                  class="bg-white max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1  justify-center mx-3 row-end-3 rounded-3xl">
                  <div class="flex flex-col shadow-md max-w-3xl rounded-3xl  h-full">
                    <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-semibold">COACHES</div>

                    <div class=" rounded-2xl mx-1">
                      <ion-accordion-group expand="inset" class="rounded-3xl shadow-none border-white">
                        <ion-accordion value="first">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?6">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Trixia Mei Rillo</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="second">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?7">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Frederick James Flores</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="third">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?8">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Sean Encarnacion</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="fourth">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?9">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Tiffany Joyce Humilde</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>

                      </ion-accordion-group>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Skeleton Loading-->
            <div class="mx-auto">
              <div class="md:m-20 mx-0  my-5 justify-center">
                <div
                  class=" bg-white max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                  <div class="flex flex-col shadow-md max-w-3xl rounded-3xl  h-full">
                    <div class="h-7 mx-5 py-1 rounded-3xl animate-pulse px-3 text-xl font-semibold bg-gray-200 mt-5 w-52">
                    </div>

                    <div class=" p-6 rounded-2xl mx-2">
                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>

                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>
                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>
                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>
                      <div class="flex py-5 animate-pulse">
                        <span class="p-2 bg-white rounded-full shadow-md dark:bg-gray-200">
                          <div
                            class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-200 ring-gray-200 ring-offset-white">
                          </div>
                        </span>
                        <div class="text-left ml-2.5 my-auto">
                          <p class="bg-gray-200 w-52 h-5 rounded-full"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--End of Skeleton Loading-->
          </MembersTab>
          <MembersTab title="Admin">
            <div class="mx-auto">
              <div class="mx-0  my-5 justify-center">
                <div
                  class="bg-white max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1  justify-center mx-3 row-end-3 rounded-3xl">
                  <div class="flex flex-col shadow-md max-w-3xl rounded-3xl  h-full">
                    <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-semibold">ADMINS</div>

                    <div class=" rounded-2xl mx-1">
                      <ion-accordion-group expand="inset" class="rounded-3xl shadow-none border-white">
                        <ion-accordion value="first">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?10">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Darryl Panis</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="second">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?7">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900"></p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="third">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?8">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Sean Encarnacion</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>
                        <ion-accordion value="fourth">
                          <ion-item slot="header" color="rose">
                            <div class="flex py-5">
                              <span class="p-2 bg-white rounded-full shadow-md">
                                <img alt=""
                                  class="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-[#004aad] ring-offset-white"
                                  src="https://source.unsplash.com/40x40/?portrait?9">
                              </span>
                              <div class="text-left ml-2.5 my-auto">
                                <p class="text-gray-900">Tiffany Joyce Humilde</p>
                              </div>
                            </div>
                          </ion-item>
                          <div class="ion-padding" slot="content">Age:</div>
                          <div class="ion-padding" slot="content">Gender:</div>
                          <div class="ion-padding" slot="content">Weight:</div>
                          <div class="ion-padding" slot="content">Height:</div>
                          <div class="ion-padding" slot="content">Workout Level:</div>
                          <div class="ion-padding" slot="content">Sessions:</div>
                          <div class="ion-padding" slot="content">Goal:</div>
                          <div class="ion-padding grid grid-cols-2 gap-1" slot="content">
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Coach</button>
                            <button
                              class="text-center w-full hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">Add
                              Subscription
                            </button>
                            <button
                              class="text-center w-full col-span-2 hoverL:bg-gray-100 px-6 py-3 bg-[#004AAD] text-white rounded-xl">View
                              More</button>
                          </div>
                        </ion-accordion>

                      </ion-accordion-group>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </MembersTab>

        </MembersWrap>

      </div>



    </ion-content>
  </ion-page>
</template>

<script>
//import { Icon } from '@iconify/vue';
import { IonPage, IonToolbar, IonContent, IonHeader, IonTitle, IonIcon, IonAccordion, IonAccordionGroup, IonItem, IonButtons, IonButton, IonBadge, alertController } from '@ionic/vue';
import MembersWrap from '../components/MembersWrap.vue';
import MembersTab from '../components/MembersTab.vue';
import { trashOutline, personAddOutline, searchOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    MembersTab,
    MembersWrap,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonItem,
    IonAccordion,
    IonAccordionGroup,
    IonButtons,
    IonButton,
    IonBadge



  },
  setup() {

    const presentAlert = async () => {
      const alert = await alertController.create({
        header: 'Please enter your info',
        buttons: ['OK'],
        inputs: [
          {
            placeholder: 'Name',
          },
          {
            placeholder: 'Nickname (max 8 characters)',
            attributes: {
              maxlength: 8,
            },
          },
          {
            type: 'number',
            placeholder: 'Age',
            min: 1,
            max: 100,
          },
          {
            type: 'textarea',
            placeholder: 'A little about yourself',
          },
        ],
      });

      await alert.present();
    };

    return { presentAlert, trashOutline, personAddOutline, searchOutline }
  },

});

</script>
<style scoped>
.ion-color-rose {
  --ion-color-base: #F0F2F5;
  --ion-color-base-rgb: #f0f2f5;
  --ion-color-contrast: #f0f2f5;
  --ion-color-contrast-rgb: #fff;
  --ion-color-shade: #f0f2f5;
  --ion-color-tint: #f0f2f5;

}
</style>
