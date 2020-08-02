
- [Loops](http://lesscss.cn/features/#loops-feature)

### Loops

```less
@primary: #3a70df;
@danger: #df3a25;
@success: #2fcd77;
@warning: #fba13b;
@white: #ffffff;
@black: #000000;
@textBlack: #383838;
@ccc: #cccccc;
@colorlist: @danger, @primary, @success, @warning;
@length: length(@colorlist);

.generate-columns(@length);

.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
    color: extract(@colorlist, @i);
  }
  .generate-columns(@n, (@i + 1));
}
```

```less
.generate-col-width(12);

.generate-col-width(@n, @i: 1) when (@i =< @n) {
  .col-md-@{i} {
    width: @i / @n * 100%
  }

  .generate-col-width(@n, @i + 1);
}
```