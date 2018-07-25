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
        description: {
          firstHalf: 'Cras posuere velit ac egestas sodales. Suspendisse in nunc sed nisi tincidunt accumsan. Maar dit is gewoon Blanko!',
          secondHalf: 'Second!'
        },
        preview: 'blanko',
        links: [
          {
            title: 'Github',
            url: 'https://github.com/Blankoo/blanko-core/tree/master'
          },
          {
            title: 'Dribbble',
            url: 'https://dribbble.com/shots/4428701-Blanko-concept-website'
          },
          {
            title: 'Website',
            url: 'https://www.blankoapp.com/beta/'
          }
        ],
        previews: [
          {
            name: 'blanko-app.png',
            title: 'Blanko app'
          },
          {
            name: 'blanko-app.png',
            title: 'Blanko app'
          }
        ]
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
        description: {
          firstHalf: 'Cras posuere velit ac egestas sodales. Suspendisse in nunc sed nisi tincidunt accumsan. Maar dit is gewoon de Crazy Dutch Experience!',
          secondHalf: 'Second!'
        },
        preview: 'cde',
        links: [
          {
            title: 'Github',
            url: 'https://github.com/donovanroubos/cde-website'
          },
          {
            title: 'Website',
            url: 'https://crazydutchexperience.com/'
          }
        ],
        previews: [
          {
            name: 'cde-website.gif',
            title: 'Crazy Dutch Experience website'
          },
          {
            name: 'cde-app.gif',
            title: 'Crazy Dutch Experience campaign'
          }
        ]
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
              firstHalf: 'My name is Donovan Roubos, 20 years old and a passionate frontend developer from the Netherlands🇳🇱. I recently graduated at Mediacollege Amsterdam as Mediadeveloper. I like to resolve design challenges, creating perfect user interfaces and writing semantic and structure based code.',
              secondHalf: 'Knowing all aspects about an design and an technical decision is what I like, so I can understand how to create the best. I believe that’s the way to develop an good looking and functional product. Checkout my Github for more code details!'
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
      footerCtaurl: 'mailto:hello@donovanroubos.nl',
      copyRight: 'Copyright © 2018 Donovan Roubos',
      socials: [
        {
          name: 'github',
          url: 'https://github.com/donovanroubos'
        },
        {
          name: 'dribbble',
          url: 'https://dribbble.com/donovanroubos'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/donovan-roubos-a209a854/'
        }
      ]
    }
  }
}
