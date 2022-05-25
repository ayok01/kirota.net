<template>
  <v-row  justify="center" align-content="center" margin="0%" style="height:100vh">
    <v-col >
      <v-card
      elevation="24"
      class="mx-auto"
      height=470 width=320
      >
      <v-row class="justify-center">
      <v-avatar
          class="profile text-center mt-15"
          color="grey"
          size="164"
        >
        <v-img src="./20220309gif-icon2.gif"></v-img>
      </v-avatar>
      </v-row>
      <v-col class="py-0">
        <v-list-item
        color="rgba(0, 0, 0, .4)"

        >
        <v-list-item-content>
          <v-card-text class="text-center text-h6">
          Shirotsuki kirota
          </v-card-text>
          <v-list-item-subtitle class="text-center">エブリディヤングライフ</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>

        <v-row class="justify-center">
        <v-card-actions class="pt-14">
          <v-btn
            outlined
            rounded
            text
            >
            <a href="https://twitter.com/KiroTuki">Twitter</a>
          </v-btn>
                    <v-btn
            outlined
            rounded
            text
            >
            <a href="https://misskey.io/@shirotuki_ki">Misskey</a>
          </v-btn>
                    <v-btn
            outlined
            rounded
            text
            >
            <a href="https://www.pixiv.net/users/26696698">Pixiv</a>
          </v-btn>
      </v-card-actions>
      </v-row>
      </v-col>

      </v-card>
    </v-col>
  </v-row>
</template>

