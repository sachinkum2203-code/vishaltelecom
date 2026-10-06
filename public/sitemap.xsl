<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap — VS Telecom</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          :root {
            --primary: #d71920;
            --bg: #ffffff;
            --card-bg: #ffffff;
            --text: #1e293b;
            --muted: #64748b;
            --border: #e2e8f0;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            padding: 40px 20px;
            line-height: 1.6;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
          }
          .header {
            margin-bottom: 24px;
            padding-bottom: 20px;
            border-bottom: 2px solid var(--primary);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
          }
          .title-area h1 {
            font-size: 26px;
            font-weight: 800;
            color: #0f172a;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .title-area h1 span {
            color: var(--primary);
          }
          .title-area p {
            color: var(--muted);
            font-size: 14px;
            margin-top: 4px;
          }
          .badge {
            background-color: #fff1f2;
            color: var(--primary);
            border: 1px solid #fecdd3;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 700;
          }
          .table-wrapper {
            background-color: var(--card-bg);
            border-radius: 12px;
            border: 1px solid var(--border);
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          th {
            background-color: #f8fafc;
            padding: 14px 18px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #475569;
            font-weight: 700;
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 16px 18px;
            font-size: 14px;
            border-bottom: 1px solid #f1f5f9;
            color: #334155;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          a {
            color: #d71920;
            text-decoration: none;
            word-break: break-all;
            font-weight: 600;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority-tag {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 700;
            background: #e0f2fe;
            color: #0369a1;
          }
          .priority-high {
            background: #ffe4e6;
            color: #9f1239;
          }
          .footer {
            margin-top: 28px;
            text-align: center;
            font-size: 13px;
            color: var(--muted);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="title-area">
              <h1>VS Telecom <span>XML Sitemap</span></h1>
              <p>Index of valid public search-engine discoverable URLs for vstelicom.in</p>
            </div>
            <div class="badge">
              Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
            </div>
          </div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>URL Location</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="color: #475569; font-weight: 500;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                    <td style="color: #475569; text-transform: capitalize; font-weight: 500;">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <span class="priority-tag">
                        <xsl:if test="sitemap:priority &gt;= 0.9">
                          <xsl:attribute name="class">priority-tag priority-high</xsl:attribute>
                        </xsl:if>
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            Generated for VS Telecom • <a href="https://vstelicom.in" style="color: var(--muted);">https://vstelicom.in</a>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
