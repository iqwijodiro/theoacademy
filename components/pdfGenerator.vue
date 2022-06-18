<template>
  <div>
    <my-btn text="Generar PDF" color="secondary" :action="writePdf" />
  </div>
</template>

<script>
// import fs from 'fs'
// import JsPDF from 'jspdf'
// import 'jspdf-autotable'
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import download from 'downloadjs'
import MyBtn from './buttons/myBtn.vue'
export default {
  components: { MyBtn },
  props: {
    giftBookText: {
      type: String,
      default: 'Hola coca cola',
    },
  },
  data() {
    return {
      pdf: null,
    }
  },
  methods: {
    async writePdf() {
      try {
        const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
        const currentPdf = await fetch(url).then((res) => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(currentPdf)
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

        const newPage = pdfDoc.addPage()
        const { width, height } = newPage.getSize()
        const message = this.giftBookText

        newPage.drawText(message, {
          x: width / 2 - 100,
          y: height / 2 + 300,
          size: 16,
          font: helveticaFont,
          color: rgb(0, 0, 0.5),
          rotate: degrees(0),
        })
        const pdfBytes = await pdfDoc.save()
        download(
          pdfBytes,
          'pdf-lib_modification_example.pdf',
          'application/pdf'
        )
      } catch (error) {
        throw new Error(error)
      }

    },
  },
}
</script>
