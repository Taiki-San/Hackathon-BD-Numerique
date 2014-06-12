#!/bin/sh

root=$(pwd)

EPUB_FILENAME="Hackathon_beta"

EPUB_FOLDER="${root}/EPUB3/"

find "${EPUB_FOLDER}" -name ".DS_Store" -depth -exec rm {} \;

#for x in `find ./$@ -name ".DS_Store" -print`
#   do
#     rm -f $x
#   done


javac -classpath "${root}/epubcheck.jar" "${root}/zipEpub.java" -d "${root}/bin" -sourcepath "${root}" #-verbose

java -classpath "${root}/epubcheck.jar:${root}/bin" zipEpub ${EPUB_FOLDER}
#java -jar "${root}/epubcheck.jar" "${EPUB_FOLDER}" -mode exp -save


mv "${root}/EPUB3.epub" "${root}/${EPUB_FILENAME}.epub"

#open "${EPUB_FOLDER}/.."
