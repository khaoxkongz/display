import { TourStudy } from "@/modules/tours/studies/types"

export function TourBrochure({
  brochure,
}: {
  brochure: TourStudy["brochure"]
}) {
  if (!brochure || !brochure.url) {
    return (
      <div className="flex h-[200px] items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 text-gray-500">
        ขณะนี้ยังไม่มีตารางกิจกรรมโปรแกรมทัวร์
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      {brochure.mimeType === "application/pdf" ? (
        <iframe
          src={brochure.url}
          className="h-[700px] w-full"
          title={brochure.alt || "PDF Viewer"}
        ></iframe>
      ) : brochure.mimeType === "image/png" ? (
        <img
          src={brochure.url}
          alt={brochure.alt || "Tour Brochure Image"}
          className="h-auto w-full object-contain"
        />
      ) : (
        <p>Unsupported brochure format: {brochure.mimeType}</p>
      )}
    </div>
  )
}
