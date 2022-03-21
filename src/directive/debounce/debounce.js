export default {
    inserted: function (el, binding) {
        // debugger
        // console.log(`el:${el},binding:${binding}`);
        let timer
        el.addEventListener('keyup', () => {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            console.log(`binding.value:${binding.value()}`);
            binding.value()
          }, 1000)
        })
      },
}