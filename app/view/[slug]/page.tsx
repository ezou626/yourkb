import CanvasDisplay from "@/components/viewer";

import { createClient } from '@/utils/supabase/server';

export default async function ViewKilobyte({ params }: { params: { slug: string } }) {

  const { slug } = params;

  const supabase = createClient();

  const { data, error } = await supabase
        .from('kilobytes')
        .select()
        .eq('id', slug);

  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        {(data && data.length !== 0) ? 
          <CanvasDisplay 
            fg_color={data[0].fg_color} 
            bg_color={data[0].bg_color} 
            hexString={data[0].value}>
            </CanvasDisplay> 
            : <p>This KB seems to be missing.</p>}
      </main>
    </>
  );
}