import { BookOpenIcon, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@bettergov/kapwa/card';
import { toTitleCase } from '../../lib/stringUtils';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import type { LegislativeOfficial } from '../../data/yamlLoader';

export default function CouncilMemberCard({
  member,
}: {
  member: LegislativeOfficial;
}) {
  const chairedCommittees = member.committee_chair || [];

  return (
    <Card className="group flex h-full flex-col bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <CardContent className="flex h-full flex-col space-y-3 p-4 md:p-5">
        {/* Row 1 */}
        <div>
          <Text
            size="sm"
            className="text-primary-700 mb-0.5 font-bold tracking-widest uppercase"
          >
            {member.position || 'SB Member'}
          </Text>

          <Heading
            level={6}
            className="text-gray-900 mb-0 text-base font-bold leading-tight"
          >
            Hon. {toTitleCase(member.name)}
          </Heading>
        </div>

        {/* Row 2 */}
        {chairedCommittees.length > 0 && (
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <BookOpenIcon className="text-primary-600 h-3.5 w-3.5" />
              <Text className="text-gray-600 text-xs font-bold tracking-widest uppercase">
                Committee Chair
              </Text>
            </div>

            <ul className="flex flex-col gap-1 pl-5 list-disc marker:text-gray-300">
              {chairedCommittees.map(committee => (
                <li
                  key={committee}
                  className="text-gray-800 break-words text-[12px] font-medium"
                >
                  {toTitleCase(committee)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Row 3 */}
        {(member.contact?.phone || member.contact?.email) && (
          <div className="border-t border-gray-100 mt-auto pt-3 flex flex-col gap-2">
            {member.contact?.phone && (
              <a
                href={`tel:${member.contact.phone}`}
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary-600"
              >
                <Phone className="h-3 w-3 text-gray-400" />
                {member.contact.phone}
              </a>
            )}

            {member.contact?.email && (
              <a
                href={`mailto:${member.contact.email}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600"
              >
                <Mail className="h-3 w-3 text-gray-400" />
                <span className="truncate">{member.contact.email}</span>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
