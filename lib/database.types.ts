export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: string;
          full_name: string;
          email: string | null;
          phone: string;
          company_name: string | null;
          project_type: string;
          message: string;
          status: "new" | "contacted" | "quoted" | "closed";
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email?: string | null;
          phone: string;
          company_name?: string | null;
          project_type: string;
          message: string;
          status?: "new" | "contacted" | "quoted" | "closed";
          created_at?: string;
        };
        Update: {
          full_name?: string;
          email?: string | null;
          phone?: string;
          company_name?: string | null;
          project_type?: string;
          message?: string;
          status?: "new" | "contacted" | "quoted" | "closed";
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
