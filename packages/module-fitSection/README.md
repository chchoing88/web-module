# fitSection

- 스크롤 한후 사용자가 설정한 section 의 가장 가까운쪽에 fit 하게 스크롤을 자동으로 시켜준다.

# TEST USAGE

```sh

```

# fitSection Module USAGE

```javascript
new M.FitSection({
  section: ["kakaoContent", "section1", "section2", "section3"]
});
```

# fitSection Module Options

```javascript
new M.FitSection({
  section: ["kakaoContent", "section1", "section2", "section3"],
  easing: "easeInExpo",
  duration: 1000,
  section: ["section1", "section2", "section3"],
  delay: 500
});
```
