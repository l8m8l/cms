# CMS

This is a multilingual Content Management System (CMS) project built using [Payload CMS](https://payloadcms.com/), MongoDB, and React.

## 🛠️ Tech Stack

- **CMS**: [Payload CMS](https://payloadcms.com/)
- **Database**: MongoDB
- **Frontend**: React (custom interfaces for admin or content editing, if applicable)
- **Image Processing**: Images are automatically converted to `.webp` format after upload.

## 🌍 Internationalization (i18n)

This project supports multiple locales. All translatable content fields are internationalized.

### Supported Language Codes:
| Code   | Language              |
|--------|-----------------------|
| ar-SA  | Arabic (Saudi Arabia) |
| en-GB  | English (UK)           |
| es-ES  | Spanish (Spain)        |
| fr-FR  | French (France)        |
| id-ID  | Indonesian             |
| it-IT  | Italian                |
| ja-JP  | Japanese               |
| ko-KR  | Korean                 |
| pt-BR  | Portuguese (Brazil)    |
| th-TH  | Thai                   |
| tr-TR  | Turkish                |
| vi-VN  | Vietnamese             |
| zh-Hant | Traditional Chinese   |

> 🗣 **Default language is `en-GB`.**

## 🖼 Image Handling

- Uploaded images are automatically transformed to `.webp` format.
- All image fields in Payload should be configured to:
  - Accept only specific formats (e.g., jpg, png, webp)
  - Perform automatic conversion after upload using hooks or custom plugins
