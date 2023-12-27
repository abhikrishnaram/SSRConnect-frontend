import Image from 'next/image';
import Link from 'next/link';

import { ITeam } from '@/app/(console)/types';

const _ = {
  teamID: 'AM242021',
  mentor: {
    id: 12,
    uid: 'M342',
    name: 'John Doe',
    email: 'johndoe@mail.com',
  },
  members: [
    {
      id: 1,
      uid: 'AM.EN.U4CSE21103',
      name: 'Abhiram Krishna',
      email: 'amenu4cse21103@am.students.amrita.edu',
    },
    {
      id: 2,
      uid: 'AM.EN.U4CSE21104',
      name: 'John Doe',
      email: 'amenu4cse21104@am.students.amrita.edu',
    },
    {
      id: 1,
      uid: 'AM.EN.U4CSE21103',
      name: 'Abhiram Krishna',
      email: 'amenu4cse21103@am.students.amrita.edu',
    },
    {
      id: 2,
      uid: 'AM.EN.U4CSE21104',
      name: 'John Doe',
      email: 'amenu4cse21104@am.students.amrita.edu',
    },
    {
      id: 1,
      uid: 'AM.EN.U4CSE21103',
      name: 'Abhiram Krishna',
      email: 'amenu4cse21103@am.students.amrita.edu',
    },
    {
      id: 2,
      uid: 'AM.EN.U4CSE21104',
      name: 'John Doe',
      email: 'amenu4cse21104@am.students.amrita.edu',
    },
  ],
  project: null,
  proposals: [
    {
      id: 0,
      title: 'Clean Water Initiative',
      description: 'A proposal to implement clean water solutions in underprivileged communities.',
      status: 'SUBMITTED',
    },
    {
      id: 1,
      title: 'Digital Literacy Program',
      description: 'A proposal to provide digital literacy education to adults in rural areas.',
      status: 'SUBMITTED',
      timestamp: '2021-09-01T00:00:00.000Z',
    },
    {
      id: 2,
      title: 'Sustainable Agriculture Practices',
      description: 'A proposal to train farmers in sustainable agriculture practices to combat climate change.',
      status: 'SUBMITTED',
    },
    {
      id: 3,
      title: 'Mental Health Awareness Campaign',
      description: 'A proposal to run a mental health awareness campaign in schools and colleges.',
      status: 'SUBMITTED',
    },
    {
      id: 4,
      title: 'Community Recycling Program',
      description: 'A proposal to implement a community-wide recycling program to reduce waste.',
      status: 'SUBMITTED',
    },
  ],
  stats: {
    proposals: 2,
    members: 0,
    status: 'Proposal Submission',
  },
};


const TeamSidebar = ({ team } : { team: Partial<ITeam> }) => (
    <div className="w-full h-full bg-white rounded-xl flex flex-col items-center justify-start gap-4">
        <div className="bg-gradient-to-br from-primary to-blue-800 w-full rounded-lg p-6">
            <div className="text-white">Team ID</div>
            <div className="font-bold text-3xl text-white flex items-center gap-2">
                23SSR024
            </div>
        </div>
        <div className="text-gray-900 flex flex-col w-full">
            <div className="font-bold text-gray-400 text-lg">Mentor</div>
            <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full">
                        <Image
                            src="/assets/avatar.svg"
                            alt="User"
                            width={100}
                            height={100}
                            className="rounded-full aspect-square"
                        />
                    </div>
                    <div className="text-left">
                        <div className="text-gray-700 font-bold text-lg">{team?.mentor?.name}</div>
                        <Link
                            href={`mailto:${team?.mentor?.email}`}
                            className="text-gray-700 text-sm underline"
                        >
                            {team?.mentor?.email}
                        </Link>
                    </div>
                </div>
                <div className="bg-white aspect-square border h-full flex justify-center items-center font-bold rounded-lg">
                    {team?.mentor?.uid}
                </div>
            </div>
        </div>
        <div className="text-gray-900 flex flex-col mt-4 w-full flex-grow overflow-auto">
            <div className="font-bold text-gray-400 text-lg">Members</div>
            <div className="flex-grow overflow-auto">
                <div className="flex flex-col max-h-[400px] gap-4">
                    {team?.members?.map((member, index) => (
                        <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-between gap-4" key={index}>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full">
                                    <Image
                                        src="/assets/avatar.svg"
                                        alt="User"
                                        width={100}
                                        height={100}
                                        className="rounded-full aspect-square"
                                    />
                                </div>
                                <div className="text-left">
                                    <div className="text-gray-700 font-bold text-lg">{member.name}</div>
                                    <div className="text-gray-500 text-sm">{member.uid}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default TeamSidebar;