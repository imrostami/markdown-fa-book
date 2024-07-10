<template>
  <DocContainer page-title="کار با Heading ها">
    <div class="paragraph-container">
      <Paragraph>Heading
        در Markdown
        امکانیه برای نوشتن و تایتل بندی بخش های مختلف متن که به شکل مرسومی در زبان مارکاپی مثل Html هم این عمل به وسیله تگ های خانواده h (H1-H6)
        هستند صورت میگیره
        اما نوشتن Heading در مارکداون بسیار ساده است
        فقط کافیه که محتوای خودتون رو مقابل عبارت # قرار بدید تا یک Heading برای شما ایجاد بشه
      </Paragraph>
    </div>

    <div class="paragraph-container">
      <Paragraph>
        <h3 class="fw-bold">سایز بندی در Heading ها</h3>
        <Paragraph>
          خانواده هدینگ ها در Markdown به 6 دسته تقسیم می شوند
          که توی ادامه قطعه کد به همراه نمونه اون آورده شده
          فقط دقت باشید که بین علامت
          <code> # </code>
          و محتوای شما یک فاصله باید وجود داشته باشه تا Parser مارکداون بتونه اون چیزی که شما نوشتین رو ترجمه کنه
          این موضوع توی باقی جاها هم صادقه پس ما بین علائم و محتوایی که میخواین بنویسید یک فاصله قائل باشید :)
        </Paragraph>


      <div class="container-fluid codeblocks">

       <CodeExample code="# Heading 1">
         <h1>Heading 1</h1>
       </CodeExample>
        <CodeExample code="## Heading 2">
          <h2>Heading 2</h2>
        </CodeExample>

        <CodeExample code="### Heading 3">
          <h3>Heading 3</h3>
        </CodeExample>

        <CodeExample code="#### Heading 4">
          <h4>Heading 4</h4>
        </CodeExample>

        <CodeExample code="##### Heading 5">
          <h5>Heading 5</h5>
        </CodeExample>

        <CodeExample code="###### Heading 6">
          <h6>Heading 6</h6>
        </CodeExample>




      </div>

        <Paragraph>
          چیزی که
          <strong class="text-decoration-underline"> بسیار حائز اهمیته</strong>
          اینه که مینیم سایز هدینگ ها یک و ماکزیمم اون ها 6 هست ینی اگه بخوایم از
        <code class="code-bubble">My Heading Content #######</code>
          استفاده کنیم غلطه و برامون چیزی نشون داده نخواهد شد
        </Paragraph>


      </Paragraph>
    </div>

  </DocContainer>
</template>

<style scoped>
h1,h2,h3,h4,h5,h6{
  margin: 0;
  width: 100%;
  padding-block: 3px;
}
.codeblocks{
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>

