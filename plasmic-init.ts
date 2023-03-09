import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "iddbBH83KhUWFRXCoL8Dy2",  // ID of a project you are using
      token: "GTKyBOoNnQUKhBGJe33WFHXxWswC4hZ2RNESygf44JQ4Y5gXoHknXwyavv4xbFIGYoNNiuin8DkiDWQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
