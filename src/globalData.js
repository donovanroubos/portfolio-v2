/* eslint-disable max-len */
export default {
  content: {
    cases: [
      {
        id: 'blanko',
        name: 'Blanko',
        type: 'Desktop app',
        date: {
          year: '2017',
          month: '11',
          day: '5'
        },
        description: 'Cras posuere velit ac egestas sodales. Suspendisse in nunc sed nisi tincidunt accumsan. Want dit is Blanko!',
        preview: 'blanko'
      },
      {
        id: 'cde',
        name: 'Crazy Dutch Experience',
        type: 'Web app',
        date: {
          year: '2018',
          month: '7',
          day: '13'
        },
        description: 'Cras posuere velit ac egestas sodales. Suspendisse in nunc sed nisi tincidunt accumsan. Maar dit is gewoon de Crazy Dutch Experience!',
        preview: 'cde'
      }
    ],
    experience: [
      {
        name: 'Loyals',
        type: 'work',
        description: 'Aenean hendrerit felis sit amet leo lfobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. Vestibulum luctus risus quis consequat vulputate. Suspendisse malesuada diam tristique ex aliquam, ut efficitur mauris finibus.',
        date: {
          from: 'Feb 2017',
          untill: 'Present'
        }
      },
      {
        name: 'Roeseboes',
        type: 'work',
        description: 'Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. Vestibulum luctus risus quis consequat vulputate. Suspendisse malesuada diam tristique ex aliquam, ut efficitur mauris finibus.',
        date: {
          from: 'Dec 2016',
          untill: 'Present'
        }
      },
      {
        name: 'MediaMonks',
        type: 'work',
        description: 'Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. Vestibulum luctus risus quis consequat vulputate. Suspendisse malesuada diam tristique ex aliquam, ut efficitur mauris finibus.',
        date: {
          from: 'Feb 2017',
          untill: 'Jul 2017'
        }
      },
      {
        name: 'Mediacollege Amsterdam',
        type: 'study',
        role: 'Mediadeveloper',
        description: 'Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. Vestibulum luctus risus quis consequat vulputate. Suspendisse malesuada diam tristique ex aliquam, ut efficitur mauris finibus.',
        date: {
          from: '2014',
          untill: '2018'
        }
      }
    ],
    pages: [
      {
        id: 'work',
        name: 'Work',
        description: 'Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit.'
      },
      {
        id: 'about',
        name: 'About me',
        profilePicture: 'me',
        content: {
          introduction: {
            title: 'Introduction',
            description: {
              firstHalf: 'Aliquam quis ipsum sit amet ligula convallis luctus sit amet in ante. Quisque porttitor orci at tellus scelerisque vulputate. Donec ac velit imperdiet, facilisis nisi vel, tempor elit. Fusce ultrices elit eget fermentum ultricies. Donec mattis metus a nisi finibus, ut lacinia diam venenatis.',
              secondHalf: 'Aliquam quis ipsum sit amet ligula convallis luctus sit amet in ante. Quisque porttitor orci at tellus scelerisque vulputate. Donec ac velit imperdiet, facilisis nisi vel, tempor elit. Fusce ultrices elit eget fermentum ultricies. Donec mattis metus a nisi finibus, ut lacinia diam venenatis.'
            }
          },
          experience: {
            title: 'Experience'
          },
          study: {
            title: 'Study'
          }
        }
      }
    ],
    footer: {
      footerText: 'Do you have a good idea, question or something else?',
      footerCta: 'Contact me',
      footerCtaLink: 'mailto:hello@donovanroubos.nl',
      copyRight: 'Copyright © 2018 Donovan Roubos',
      socials: [
        {
          name: 'github',
          link: 'https://github.com/donovanroubos'
        },
        {
          name: 'dribbble',
          link: 'https://dribbble.com/donovanroubos'
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/donovan-roubos-a209a854/'
        }
      ]
    }
  }
}
