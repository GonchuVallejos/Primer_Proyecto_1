function constancia(solicitante) {
    
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        hotfixes: [] // an array of hotfix strings to enable
    }).setProperties({
        title: 'Constancia de Solicitud de Información',
        subject: 'Constancia de inicio de Trámite',
        author: 'Dir. de Transp. y Gobierno Abierto',
        keywords: 'Gobierno Abierto, Solicitud de Información, Transparencia, Acceso a la Información',
        creator: 'Dir. de Transparencia y Gobierno Abierto'
    });

    var pageWidth = 250,
        lineHeight = 2,
        marginY = 50,
        marginX = 20,
        maxLineWidth = pageWidth - 20,
        fontSize = 14,
        ptsPerMM = 20,
        oneLineHeight = fontSize * lineHeight / ptsPerMM,
        text = '               Sr./Sra: ' + solicitante + '. Le informamos que hemos recibido con éxito su solicitud de información pública en el marco de la ley N° 5886/15 de Derecho de Acceso a la Información Pública la cual ha sido registrada en nuestro sistema con el código: ' + nroSI + '.'

    var textLines = doc
        .setFont('Roboto')
        .setFontSize(fontSize)
        .splitTextToSize(text, maxLineWidth)

    //header
    doc.setLineWidth(0.5)
    doc.rect(5, 5, 200, 38)
    doc.setFontSize(15)
    doc.setFontType('bold')
    doc.text(50, 20, 'Constancia de Recepción de Solicitud de Información')
    doc.setFontSize(10)
    doc.setFontType('normal')
    doc.text(50, 25, 'Ley N° 5886 DERECHO DE ACCESO A LA INFORMACIÓN PÚBLICA')
    doc.text(50, 30, 'Decreto Regamentario N° 1451-G-16')
    doc.addImage(imgData, 'JPEG', 10, 10, 30, 30)

    //body
    doc.setLineWidth(0.5)
    doc.line(5, 43, 5, 100)
    doc.line(205, 43, 205, 100)
    doc.text(textLines, marginX, marginY + 2 * oneLineHeight)

    //footer
    doc.setLineWidth(0.5)
    doc.line(5, 80, 205, 80)
    doc.line(5, 100, 205, 100)
    doc.setFontSize(9)
    doc.setFontType('normal')
    doc.text(53, 85, 'Dirección: Sarmiento N°174 - 12 A | San Salvador de Jujuy (Y4600)')
    doc.text(55, 90, 'Contacto: info@gajujuy.gob.ar | gobiernoabiertojujuy@gmail.com')
    doc.text(65, 95, 'Teléfono: 0388-4239452 | Celular: 388 446-2864')

    doc.output()
    doc.save('Constancia de Solicitud de Información.pdf')
}
