<template>
    <DocContainer page-title="ابزار تمرین و یادگیری Markdwon">
        <div class="paragraph-container">
            <Paragraph>
                سوالی که برای همه ماها پیش میاد اینه که برای شروع به نوشتن و تست 
                Markdown
                از کجا باید شروع کنیم
            </Paragraph>
            <Paragraph>
                جوابش مثل سینتکس 
                Markdown
                خیلی ساده و راحته :)
            </Paragraph>

            <Paragraph>
                ابزار های مختلفی وجود دارن که میتونین توش با Markdown کار کنین 
                که در زیر لیستی از اینا مهرفی میشه 
            </Paragraph>
            

            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        نوشتن به کمک Visual Studio Code
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">

        <ImageFigure imageUrl="/BookImages/markdown-vs-01.png" imageAlt="visual studio code markdown 1">
            اول یک فایل با فرمت 
            <code>.md</code>
            و نام دلخواه
            بسازید
        </ImageFigure>

        <ImageFigure imageUrl="/BookImages/markdown-vs-02.png" imageAlt="visual studio code markdown 2">
            محتوای Markdown خودتون رو داخل فایل ایجاد شده بنویسید
            دکمه Preview رو که مشخص شده کلیک کنید تا فایل مارکداون برای شما به صورت رندر شده نمایش داده شود
        </ImageFigure>

        <ImageFigure imageUrl="/BookImages/markdown-vs-03.png" imageAlt="visual studio code markdown 3">
        در پنجره سمت چپ 
        (Preview)
        میتونید محتوای رندر شده مارکداون رو ببینید
        </ImageFigure>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        اپلکیشن ACode در سیستم عامل اندروید
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body android-section">
        <ImageFigure imageUrl="/BookImages/acode-01.png" imageAlt="acode preview01">
        1 - ابتدا یک فایل با فرمت md در نرم افزار ACode بسازید
        </ImageFigure>

        <ImageFigure imageUrl="/BookImages/acode-02.png" imageAlt="acode preview02">
        2 - محتوای مارکداون خودتون رو داخل فایل قرار بدین و دکمه مشخص شده در تصویر رو کلیک کنید
        </ImageFigure>

        <ImageFigure imageUrl="/BookImages/acode-03.png" imageAlt="acode preview03">
        3 - محتوای مارکداون به صورت رندر شده برای شما نمایش داده خواهد شد
        </ImageFigure>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        استفاده از پروژه آزاد Editor.md (ادیتور آنلاین)
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <a class="m-3" href="https://pandao.github.io/editor.md/en.html#Features">ورود به Editor.md</a>
      </div>
    </div>
  </div>
</div>

        </div>
    </DocContainer>
</template>

<script setup>
</script>

<style scoped>
.android-section{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-width: 768px) {
  .android-section{
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 580px) {
  .android-section{
    grid-template-columns: 1fr;
  }
}
</style>

