// The CV, generated from the same content as the home page: the profile intro
// and every role in Hygraph, in the page's order, with the site's date formatting.
// Served at /cv.pdf (see next.config.js) and cached at the edge.
import { sortExperiences } from "@/utils/experiences";
import { formatRange } from "@/utils/format-range";
import { client } from "@/utils/graphql-client";
import { ExperiencesDocument, ExperiencesQuery } from "@/utils/graphql-generated";
import { socials } from "@/utils/line";
import { profile } from "@/utils/profile";
import { Document, Link, Page, renderToBuffer, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { NextApiRequest, NextApiResponse } from "next";

const ink = "#1d2340";
const ink2 = "#4a5070";
const ink3 = "#676d8c";
const cobalt = "#1f5bd0";
const hair = "#d9dcea";

const s = StyleSheet.create({
  page: { paddingTop: 44, paddingBottom: 60, paddingHorizontal: 48, fontFamily: "Helvetica", fontSize: 9.5, color: ink, lineHeight: 1.45 },
  name: { fontFamily: "Helvetica-Bold", fontSize: 24, letterSpacing: -0.4, lineHeight: 1.1 },
  title: { marginTop: 6, fontSize: 11, color: ink2 },
  links: { marginTop: 6, flexDirection: "row", flexWrap: "wrap", fontFamily: "Courier", fontSize: 8.5, color: ink3 },
  link: { color: cobalt, textDecoration: "none" },
  intro: { marginTop: 14, fontSize: 10, color: ink2, maxWidth: 470 },
  section: { marginTop: 20 },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    paddingTop: 6,
    marginBottom: 8,
    borderTopWidth: 1.2,
    borderTopColor: ink,
  },
  row: { paddingVertical: 7, borderBottomWidth: 0.6, borderBottomColor: hair },
  rowHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  rowName: { fontFamily: "Helvetica-Bold", fontSize: 10.5 },
  rowRole: { color: ink2 },
  dates: { fontFamily: "Courier", fontSize: 8.5, color: ink2 },
  body: { marginTop: 3, color: ink2 },
  proof: { marginTop: 2, fontFamily: "Helvetica-Bold", fontSize: 9, color: ink },
  bullet: { flexDirection: "row", marginTop: 2.5 },
  dash: { width: 10, color: cobalt },
  bulletText: { flex: 1, color: ink2 },
  footer: { position: "absolute", bottom: 28, left: 48, right: 48, fontFamily: "Courier", fontSize: 7.5, color: ink3, flexDirection: "row", justifyContent: "space-between" },
});

const CV = ({ experiences, generated }: { experiences: ExperiencesQuery["experiences"]; generated: string }) => (
  <Document title={`${profile.name} CV`} author={profile.name} subject={profile.title}>
    <Page size="LETTER" style={s.page}>
      <Text style={s.name}>{profile.name}</Text>
      <Text style={s.title}>
        {profile.title} · {profile.location}
      </Text>
      <View style={s.links}>
        <Link src={`https://www.${profile.site}`} style={s.link}>
          {profile.site}
        </Link>
        {socials.map((l) => (
          <Text key={l.href}>
            {"\u00a0\u00a0·\u00a0\u00a0"}
            <Link src={l.href} style={s.link}>
              {l.href.replace(/^https?:\/\//, "")}
            </Link>
          </Text>
        ))}
      </View>

      <Text style={s.intro}>{profile.intro}</Text>


      <View style={s.section}>
        <Text style={s.sectionTitle}>Experience</Text>
        {experiences.map((e) => (
          <View key={e.id} style={s.row} wrap={false}>
            <View style={s.rowHead}>
              <Text>
                <Text style={s.rowName}>{e.company}</Text>
                <Text style={s.rowRole}>{`  ${e.jobTitle}`}</Text>
              </Text>
              <Text style={s.dates}>{formatRange(e.dateRange)}</Text>
            </View>
            {(e.responsibilities ?? []).map((r, i) => (
              <View key={i} style={s.bullet}>
                <Text style={s.dash}>–</Text>
                <Text style={s.bulletText}>{r}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={s.footer} fixed>
        <Text>Generated from {profile.site} on {generated}</Text>
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>
    </Page>
  </Document>
);

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { data } = await client.query<ExperiencesQuery>({ query: ExperiencesDocument, fetchPolicy: "no-cache" });
  const generated = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "America/New_York" });
  const pdf = await renderToBuffer(<CV experiences={sortExperiences(data.experiences)} generated={generated} />);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'inline; filename="makenna-smutz-cv.pdf"');
  // fresh within the hour, and refreshed in the background for a day after
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.send(pdf);
}
