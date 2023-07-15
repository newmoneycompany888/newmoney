import { FC } from 'react'

interface IExperiencingIssueProps {}

const EXPERIENCING_ISSUES = [
  { title: 'ต้องการเงินลงทุน ต่อยอดธุรกิจ', image: '/images/young-businesswomen-talking-chatting-office.webp' },
  { title: 'ขาดสภาพคล่องในกิจการ', image: '/images/medium-shot-young-asian-woman-sitting-desk-office-rubbing-nose.webp' },
  { title: 'โดนเลื่อนเช็ค รอเช็คเคลียร์ริ่ง', image: '/images/accountant-work.webp' },
  {
    title: 'รอดิวเก็บเงินลูกค้า',
    image: '/images/professional-asian-businesswoman-working-her-office-via-laptop.webp',
  },
  { title: 'ต้องการเงินทุนสำรอง', image: '/images/finance-accounting-concept-business-woman-working-desk.webp' },
  {
    title: 'ต้องการขยายกิจการหรือสาขา',
    image:
      '/images/collaborative-process-multicultural-businesspeople-using-laptop-presentation-communication-meeting-brainstorming-ideas-about-new-project-colleagues-working-plan-success-strategy-home-office.webp',
  },
]

export const ExperiencingIssue: FC<IExperiencingIssueProps> = () => {
  return (
    <div>
      <h2 className="text-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        หากธุรกิจของคุณ กำลังประสบปัญหาแบบนี้
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {EXPERIENCING_ISSUES.map((experiencingIssue, index) => (
          <div
            key={`experiencing-issue-${index}`}
            className="group relative bg-gradient-to-r from-primary-600 via-primary to-primary-600 rounded-lg overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                className="w-full aspect-[3/2] object-cover scale-100 group-hover:scale-105 ease-in duration-300"
                src={experiencingIssue.image}
                alt="Experiencing Issue"
              />
            </div>
            <div className="flex justify-center px-2 py-1 sm:px-4 sm:py-2">
              <p className="text-white lg:text-xl font-medium">{experiencingIssue.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
