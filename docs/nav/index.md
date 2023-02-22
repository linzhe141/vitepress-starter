# Nav
- vitepress中直接使用组件
```vue
<script setup>
import Test from '../../components/Test.vue'
</script>
<Test></Test>
```

<script setup>
import Test from '../../components/Test.vue'
</script>

test组件
<Test></Test>

------

```js
export default {
  themeConfig: {
    nav: [
      {text: 'Guide', link: '/guide'},
      {text: 'Configs', link: '/configs'},
      {text: 'Changelog', link: 'https://github.com/...'},
    ],
  },
}
```

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
