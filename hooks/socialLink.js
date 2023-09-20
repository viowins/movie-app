export default function useSocialLink(socialKey) {
  const urls = [
    {
      key: 'imdb_id',
      value: 'https://www.imdb.com/title/',
    },
    {
      key: 'wikidata_id',
      value: 'https://www.wikidata.org/wiki/',
    },
    {
      key: 'facebook_id',
      value: 'https://www.facebook.com/',
    },
    {
      key: 'instagram_id',
      value: 'https://www.instagram.com/',
    },
    {
      key: 'twitter_id',
      value: 'https://www.x.com/'
    },
    {
      key: 'tvdb_id',
      value: 'https://thetvdb.com/search?query='
    }
  ];

  let url = 'link'

  urls.map((item) => {
    if (item.key == socialKey) url = item.value
  })

  return url
}