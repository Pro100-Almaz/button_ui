<template>
  <div class="main-block">
    <h2>Buttons</h2>
    <br />
    <div>
      <p class="text-primary">{{ "<Button />" }}</p>
      <Button> Default </Button>
    </div>
    <div>
      <p class="text-primary">{{ '<Button variant="outline" />' }}</p>
      <Button :outline="true"> Default </Button>
    </div>
    <div>
      <p class="text-primary">{{ '<Button variant="”text”" />' }}</p>
      <Button :only-text="true"> Default </Button>
    </div>
    <div>
      <p class="text-primary">{{ '<Button disableShadow />' }}</p>
      <Button :disable-shadow="true"> Default </Button>
    </div>
    <div>
      <p class="text-primary">{{ '<Button disabled />' }}</p>
      <Button :disabled="true"> Default </Button>
    </div>
    <div class="button-list">
      <div>
        <p class="text-primary">
          {{ '<Button startIcon="”local_grocery_store”" />' }}
        </p>
        <Button :icon="iconValue" start-icon :label="text"></Button>
      </div>
      <div>
        <p class="text-primary">
          {{ '<Button startIcon="”local_grocery_store”" />' }}
        </p>
        <Button :icon="iconValue" end-icon :label="text"></Button>
      </div>
    </div>
    <div class="button-list">
      <div>
        <p class="text-primary">{{ '<Button size="”sm”" />' }}</p>
        <Button :size="buttomSize1"> Default </Button>
      </div>
      <div>
        <p class="text-primary">{{ '<Button size="”md”" />' }}</p>
        <Button :size="buttomSize2"> Default </Button>
      </div>
      <div>
        <p class="text-primary">{{ '<Button size="”lg”" />' }}</p>
        <Button :size="buttomSize3"> Default </Button>
      </div>
    </div>
    <div class="button-list">
      <div>
        <p class="text-primary">{{ '<Button color="”default”" />' }}</p>
        <Button> Default </Button>
      </div>
      <div>
        <p class="text-primary">{{ '<Button color="”primary”" />' }}</p>
        <Button :color="primaryColor[0]"> Default </Button>
      </div>
      <div>
        <p class="text-primary">{{ '<Button color="”secondary”" />' }}</p>
        <Button :color="primaryColor[1]"> Default </Button>
      </div>
      <div>
        <p class="text-primary">{{ '<Button color="”danger”" />' }}</p>
        <Button :color="primaryColor[2]"> Default </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "./buttons/Button.vue";

const iconValue = "home";
const text = "default";
const buttomSize1 = "sm";
const buttomSize2 = "md";
const buttomSize3 = "lg";
const primaryColor = ["primary", "secondary", "danger"];
</script>

<style scoped>
h2 {
  margin-bottom: 32px;
}
.main-block {
  padding: 3rem;
  color: #4f4f4f;
  display: flex;
  flex-direction: column;
}

.main-block div {
  margin-bottom: 48px;
}

.text-primary {
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #333333;
  margin-bottom: 12px;
}

.text-secondary {
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 12px;
  color: #828282;
}

.button-list {
  display: flex;
  flex-direction: row;
  gap: 84px;
}
</style>
