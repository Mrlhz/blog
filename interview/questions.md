
# 

### 单向数据流

- [父组件通过props传值给子组件，如何避免子组件改变props的属性值报错问题](https://forum.vuejs.org/t/props-props/25997)
- [单向数据流](https://cn.vuejs.org/v2/guide/components-props.html#单向数据流)

```js
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```


```vue
<script>
export default {
  props: {
    visible: {
      type: String,
      default: ''
    }
  },
  computed: {
    myVisible: {
      get() {
        return this.visible
      },
      set(value) {
        return this.visible
      }
    }
  }
}
</script>
```