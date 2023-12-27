
import { cookies } from 'next/headers';

import ManageTeamTable from './table';

import ManageWrapper from '@/components/manage-page';

const BREADCRUMBS = [
  {
    title: 'Dashboard',
    route: '/dashboard',
  },
  {
    title: 'Manage',
    route: '/manage',
  },
  {
    title: 'Teams',
    route: '/manage/teams',
  },
];

const getTeams = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/manage/teams/`, {
    credentials: 'include',
    headers: { 
      'Content-Type': 'application/json',
      Cookie: cookies().toString(), 
    },
  });

  if(!res.ok) throw new Error('Failed to fetch data');
  return res.json();
};

const ManageTeamsPage = async () => {

  const teams = await getTeams();
  console.log(teams);

  return (
      <ManageWrapper breadcrumbs={BREADCRUMBS} title="Manage Users" className="flex">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 my-10 p-4 bg-white rounded-lg shadow-xl shadow-gray-200 min-h-[36rem] w-full">
              <div className="col-span-2 md:col-span-3 flex overflow-hidden">
                  <ManageTeamTable data={teams} />
              </div>
              <div>
                  <div className="border border-dashed border-gray-400 h-full rounded-lg"></div>
              </div>
          </div>
      </ManageWrapper>
  );
};

export default ManageTeamsPage;