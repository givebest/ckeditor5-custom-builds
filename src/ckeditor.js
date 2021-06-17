/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";

import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import SubScriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import SuperScriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  CKFinder,
  CloudServices,
  EasyImage,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,

  FontSize,
  IndentBlock,
  Alignment,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  SubScriptPlugin,
  SuperScriptPlugin,
  HorizontalLine,
  Underline,
  Strikethrough,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      "fontSize",
      "fontFamily",
      "alignment",
      "FontColor",
      "FontBackgroundColor",
      "bold",
      "italic",
      "underline",
      "link",
      "strikethrough",
      "indent",
      "outdent",
      "subscript",
      "superscript",
      "insertTable",
      "horizontalLine",
      "uploadImage",
    ],
  },
  image: {
    toolbar: [
      "imageStyle:inline",
      "imageStyle:full",
      "imageStyle:side",
      "|",
      "toggleImageCaption",
      "imageTextAlternative",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  fontSize: {
    options: [18, 22, 24, 26, 28, 32, 40, 44],
  },
  fontFamily: {
    options: ["宋体", "黑体", "楷体", "微软雅黑"],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "zh-cn",
};
