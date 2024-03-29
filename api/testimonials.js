const data = [
  {
    id: 1,
    content:
      'Apkomatic did an amazing job with my company website. They were willing to work with my budget. Their prices are very reasonable for the variety and quality of work they offer. Their team is professional and very quick in response to my inquiries and feedback. I would HIGHLY recommend them to anyone who needs a website.',
    author: {
      name: 'Barry M.',
      company: 'ALK Construction LLC.'
    }
  },
  {
    id: 2,
    content:
      'On behalf of Care MED Transport, I would like to thank Apkomatic for providing us with a clean, simple, and functional website that allows us to promote our services to our customers better. Thanks to them, we were able to give our customers a glimpse of what they can experience whenever they choose to avail our services.The look of the website has a minimalistic design that we like, it loads up pretty quickly too, which only helps out customers to be directed to us more efficiently.',
    author: {
      name: 'Eric A.',
      company: 'Caremed Transport'
    }
  },
  {
    id: 3,
    content:
      "The Apkomatic team was amazing, they were very professional. After seeing what they were able to build for my company's website, I was amazed. Looks extremely good and very happy with the outcome. I will definitely refer them to anyone who needs their services! Keep up the good work Apkomatic!",
    author: {
      name: 'Hector R.',
      company: 'Home Inspectors California'
    }
  }
]

exports.handler = event => {
  return {
    statusCode: 200,
    body: data
  }
}
