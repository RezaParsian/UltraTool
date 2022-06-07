<template>
  <div class="loading flex">
    <svg class="my-auto mx-auto" width="16px" height="12px">
      <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
      <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
    </svg>
  </div>
</template>

<script>
export default {
  name: "loading"
}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(51, 65, 85, 0.83);
}

svg{
  transform: scale(2);
}

.loading svg polyline {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.loading svg polyline#back {
  stroke: rgba(19, 24, 30, 0.83);
}
.loading svg polyline#front {
  stroke: #6e7bf2;
  stroke-dasharray: 12, 36;
  stroke-dashoffset: 48;
  animation: dash 1s linear infinite;
}
@-moz-keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-o-keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>