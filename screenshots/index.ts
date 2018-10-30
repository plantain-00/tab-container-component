import puppeteer from 'puppeteer'

(async() => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.emulate({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36' })

  const cases = [
        { type: 'vue', url: '/packages/vue/demo' },
        { type: 'react', url: '/packages/react/demo' }
  ]

  for (const { type, url } of cases) {
    await page.goto(`http://localhost:8000${url}`)
    await page.waitFor(100)
    await page.screenshot({ path: `screenshots/${type}-initial.png` })

    await page.click('.tab-1')
    await page.waitFor(100)
    await page.screenshot({ path: `screenshots/${type}-tab-switch-1.png` })

    await page.click('.tab-2')
    await page.waitFor(100)
    await page.screenshot({ path: `screenshots/${type}-tab-switch-2.png` })

    await page.click('.tab-3')
    await page.waitFor(100)
    await page.screenshot({ path: `screenshots/${type}-tab-switch-3.png` })

    await page.hover('.tab-3')
    // tslint:disable-next-line:no-duplicate-string
    await page.click('.tab-close')
    await page.waitFor(100)
    await page.screenshot({ path: `screenshots/${type}-tab-close-3.png` })

    await page.hover('.tab-2')
    await page.click('.tab-close')
    await page.waitFor(100)
    await page.screenshot({ path: `screenshots/${type}-tab-close-2.png` })

    await page.hover('.tab-1')
    await page.click('.tab-close')
    await page.waitFor(100)
    await page.screenshot({ path: `screenshots/${type}-tab-close-1.png` })
  }

  browser.close()
})()
