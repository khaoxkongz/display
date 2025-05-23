import { TourStudy } from "@/modules/tours/studies/types"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { TourBrochure } from "./TourBrochure"
import { TourFAQ } from "./TourFAQ"
import { TourTerms } from "./TourTerms"

function TourTabs({ brochure }: { brochure: TourStudy["brochure"] }) {
  return (
    <Tabs defaultValue="programs">
      <TabsList className="inline-flex items-end gap-x-px bg-transparent px-0 py-0 before:bg-[#1877f2]">
        <TabsTrigger
          value="programs"
          className="text-background cursor-pointer rounded-none bg-[#1877f2] px-6 py-2.5 text-lg data-[state=active]:h-[calc(100%+1px)] data-[state=active]:bg-red-500"
        >
          โปรแกรมทัวร์
        </TabsTrigger>
        <TabsTrigger
          value="faq"
          className="text-background cursor-pointer rounded-none bg-[#1877f2] px-6 py-2.5 text-lg data-[state=active]:h-[calc(100%+1px)] data-[state=active]:bg-red-500"
        >
          คำถามที่พบบ่อย
        </TabsTrigger>
        <TabsTrigger
          value="terms"
          className="text-background cursor-pointer rounded-none bg-[#1877f2] px-6 py-2.5 text-lg data-[state=active]:h-[calc(100%+1px)] data-[state=active]:bg-red-500"
        >
          เงื่อนไขทัวร์
        </TabsTrigger>
      </TabsList>
      <TabsContent value="programs">
        <TourBrochure brochure={brochure} />
      </TabsContent>
      <TabsContent value="faq">
        <TourFAQ />
      </TabsContent>
      <TabsContent value="terms">
        <TourTerms />
      </TabsContent>
    </Tabs>
  )
}

export { TourTabs }
